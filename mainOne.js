const API_KEY = `47504799-075623083ef7404b32b3f7cec`;
const BASE_URL = `https://pixabay.com/api/`;
const inputValue = document.querySelector(".input-field")
const loader = document.querySelector('.loader');
const listItem = document.querySelector('.img-container');
const imgErrorMessage = document.querySelector('.img-error-container')
const internetErrorMessage = document.querySelector('.internet-error-container')
let query = '';
let page = 1;
let isLoading = false;
let isConnected = true;

function debounce (func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

const checkInternetConnection = async () => {
    return navigator.onLine;
};

const handleNoInternet = async () => {
    isConnected = false;
    loader.style.display = 'block';
    imgErrorMessage.style.display = 'none';
    internetErrorMessage.style.display = 'block';
    let retryCount = 0;
    const maxRetries = 4;
    const retryInterval = 1000;

    const checkConnection = async () => {
        const isConnectedNow = await checkInternetConnection();
        if(isConnectedNow) {
            loader.style.display = 'none';
            internetErrorMessage.style.display = 'none'
            isConnected = true;
            renderImg();
        } else if (retryCount < maxRetries) {
            retryCount++
            setTimeout(checkConnection, retryInterval);
        } else {
            loader.style.display = 'block';
            internetErrorMessage.style.display = 'block';
            imgErrorMessage.style.display = 'none';
        }
    };
    checkConnection();
};

const fetchImages = async () => {
    if (!isConnected) return;

    const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&pretty=true&page=${page}&per_page=12`;
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was an error with the fetch operation:', error);
        if (error.message.includes('NetWorkError')) {
            handleNoInternet();
        }
    }
};

const renderImg = async () => {
    if (query === '' || !isConnected) return;
    if (isLoading) return;
    isLoading = true;
    loader.style.display = 'block';

    const data = await fetchImages();
    if (data && data.hits.length > 0) {
        data.hits.forEach((item) => {
            const imgList = document.createElement('li');
            const img = document.createElement('img');
            img.src = item.webformatURL;
            img.alt = item.tags;
            img.style.height = 'auto';
            img.style.padding = '20px';
            img.classList.add('image');
            imgList.classList.add('images-list');
            imgList.appendChild(img);
            listItem.appendChild(imgList);
        });
        imgErrorMessage.style.display = 'none';
    } else{
        imgErrorMessage.style.display = 'block';
    } 
    loader.style.display = 'none';
    isLoading = false;
};

window.addEventListener('scroll', () => {
    const {scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight -5 && !isLoading && isConnected) {
        page++;
        renderImg();
    }
});

inputValue.addEventListener('input', debounce(() => {
    const searchValue = inputValue.value.trim();
    if (searchValue !== "") {
            query = searchValue;
            page = 1;
            listItem.innerHTML = '';
            renderImg();
    } else {
        listItem.innerHTML = '';
    }
    }, 1200)
);

inputValue.addEventListener('input', () => {
    if (inputValue.value.trim() === "") {
        imgErrorMessage.style.display = 'none';
    }
    if (isConnected) {
        handleNoInternet()
        imgErrorMessage.style.display = 'none';
        internetErrorMessage.style.display = 'block';
    }
});
 
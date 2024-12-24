const cardList = document.querySelector('.process-item-one');
const cardHeroSection = document.querySelector('.hero-section-one');
const titleContent = document.querySelector('.title-content');
const cardBtn = document.querySelector('.action-button');
const divider = document.querySelector('.divider');
const textContainer = document.querySelector('.process-text-container');

cardBtn.addEventListener('click', () => {
    cardList.classList.toggle('active');

    if (cardList.classList.contains('active')) {
    cardList.style.backgroundColor = '#f3f3f3';
    cardBtn.innerHTML = '+'
    divider.style.display = 'none';
    textContainer.style.display = 'none';
    cardList.style.height = '160px';
    cardHeroSection.style.marginTop = '4vh';
    titleContent.style.marginTop = '2.2vh';
    } else {
    cardList.style.backgroundColor = '#b9ff66';
    cardBtn.innerHTML = '-'
    divider.style.display = 'block';
    textContainer.style.display = 'block';
    cardList.style.height = '290px';
    cardHeroSection.style.marginTop = '0vh';
    titleContent.style.marginTop = '0vh';
    }
})

const cardsContainer = document.querySelector('.process-list');
const cardList = document.querySelector('.process-item-one');
const cardHeroSection = document.querySelector('.hero-section-one');
const titleContent = document.querySelector('.card-title-content');
const cardBtn = document.querySelector('.action-button');
const divider = document.querySelector('.divider-one');
const textContainer = document.querySelector('.process-text-content-one');

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

cardsContainer.addEventListener('click', (event) => {
    // Перевіряємо, чи натиснута кнопка
    if (event.target.classList.contains('action-button-two')) {
      const button = event.target; // Натиснута кнопка
      const card = button.closest('.process-item-two'); // Відповідна картка
      const cardHeroSection = card.querySelector('.hero-section-two');
  
      // Знаходимо елементи всередині картки
      const divider = card.querySelector('.divider-two');
      const titleContent = card.querySelector('.title-content-two');
      const textContainer = card.querySelector('.process-text-content-two');
  
      // Перемикаємо стан
      card.classList.toggle('active');
      if (card.classList.contains('active')) {
        card.style.backgroundColor = '#b9ff66';
        button.textContent = '-';
        divider.style.display = 'block';
        textContainer.style.display = 'block';
        card.style.height = '290px';
        cardHeroSection.style.marginTop = '4vh';
        cardHeroSection.style.marginBottom = '4vh';
      } else {
        card.style.backgroundColor = '#f3f3f3';
        button.textContent = '+';
        divider.style.display = 'none';
        textContainer.style.display = 'none';
        card.style.height = '160px';
        cardHeroSection.style.marginBottom = '0vh';
      }
    }
});

// Testimonials slider

const testimonList = document.querySelector('.testimonials-list');
const testimonNavBut = document.querySelectorAll('.navigation-button');
const testimonLeftArrow = document.querySelector('.arrow-left');
const testimonStarsList = document.querySelector('.stars-container');
const testimonAllStarsList = document.querySelectorAll('.star');
const testimonRightArrow = document.querySelector('.arrow-right');

let currentIndex = 0; // Поточна активна зірка

// Функція для оновлення стану зірок
function updateStars(index) {
  testimonAllStarsList.forEach((star, i) => {
    star.src = i === index ? "project-img/green-star.png" : "project-img/white-star.png";
  });
}

// Функція для оновлення стрілок
function updateArrows(index) {
  testimonLeftArrow.src = index === 0 ? "project-img/Arrow left.png" : "project-img/Arrow left v2.png";
  testimonRightArrow.src = index === testimonAllStarsList.length - 1 ? "project-img/Arrow right v2.png" : "project-img/Arrow right.png";
}

// Функція для оновлення відгуку після натиску стрілки вправо

// const allTestimonials = Array.from(testimonList.children)
// let rightCounter = 0;
// function updatingContentToRight() {
//   rightCounter++;
//   if (rightCounter > 5) rightCounter = 1;

//   switch(rightCounter) {
//     case 0:
//     allTestimonials[0].style.display = 'flex';
//     allTestimonials[1].style.display = 'flex';
//     allTestimonials[2].style.display = 'none';
//     allTestimonials[3].style.display = 'none';
//     allTestimonials[4].style.display = 'flex';

//     allTestimonials[0].style.left = '660px';
//     allTestimonials[1].style.left = '34%';
//     allTestimonials[4].style.transform = 'translateX: (-204%)'
//     break;
    
//     case 1:
//     allTestimonials[0].style.display = 'flex';
//     allTestimonials[1].style.display = 'flex';
//     allTestimonials[2].style.display = 'flex';
//     allTestimonials[3].style.display = 'none';
//     allTestimonials[4].style.display = 'none';
    
//     allTestimonials[0].style.left = '-26px';
//     allTestimonials[1].style.left = '-0.3%';
//     allTestimonials[2].style.left = '110px'
//     break;
//     case 2:
//     allTestimonials[0].style.display = 'none';
//     allTestimonials[1].style.display = 'flex';
//     allTestimonials[2].style.display = 'flex';
//     allTestimonials[3].style.display = 'flex';
//     allTestimonials[4].style.display = 'none';
    
//     allTestimonials[1].style.left = '-26px';
//     allTestimonials[2].style.left = '4.3%';
//     allTestimonials[3].style.left = '110px'
//     break;

//     case 3:
//     allTestimonials[0].style.display = 'none';
//     allTestimonials[1].style.display = 'none';
//     allTestimonials[2].style.display = 'flex';
//     allTestimonials[3].style.display = 'flex';
//     allTestimonials[4].style.display = 'flex';
    
//     allTestimonials[2].style.left = '70px';
//     allTestimonials[3].style.left = '4.3%';
//     allTestimonials[4].style.left = '1370px'
//     break;

//     case 4:
//     allTestimonials[0].style.display = 'flex';
//     allTestimonials[1].style.display = 'none';
//     allTestimonials[2].style.display = 'none';
//     allTestimonials[3].style.display = 'flex';
//     allTestimonials[4].style.display = 'flex';
    
//     allTestimonials[3].style.left = '-600px';
//     allTestimonials[4].style.left = '685px';
//     allTestimonials[0].style.left = '1355px'
//     break;

//     case 5:
//     allTestimonials[0].style.display = 'flex';
//     allTestimonials[1].style.display = 'flex';
//     allTestimonials[2].style.display = 'none';
//     allTestimonials[3].style.display = 'none';
//     allTestimonials[4].style.display = 'flex';

//     allTestimonials[0].style.left = '660px';
//     allTestimonials[1].style.left = '34%';
//     allTestimonials[4].style.left = '0px'
//   }
// }

// Функція для оновлення відгуку після натиску стрілки вліво
const allTestimonials = Array.from(testimonList.children);
let counter = 0;

function updatingContent(direction) {
  // Зміна counter залежно від напряму
  if (direction === 'right') {
    counter++;
    if (counter >= allTestimonials.length) counter = 0;
  } else if (direction === 'left') {
    counter--;
    if (counter < 0) counter = allTestimonials.length - 1;
  }

  // Налаштування для кожного стану
  const configs = [
    {
      display: ['flex', 'flex', 'none', 'none', 'flex'],
      left: ['660px', '34%', null, null, '0px'],
      transform: [null, null, null, null, null]
    },
    {
      display: ['flex', 'flex', 'flex', 'none', 'none'],
      left: ['-26px', '-0.3%', '110px', null, null],
      transform: [null, null, null, null, null]
    },
    {
      display: ['none', 'flex', 'flex', 'flex', 'none'],
      left: [null, '-26px', '4.3%', '110px', null],
      transform: [null, null, null, null, null]
    },
    {
      display: ['none', 'none', 'flex', 'flex', 'flex'],
      left: [null, null, '70px', '4.3%', '1370px'],
      transform: [null, null, null, null, null]
    },
    {
      display: ['flex', 'none', 'none', 'flex', 'flex'],
      left: ['1355px', null, null, '-600px', '685px'],
      transform: [null, null, null, null, null]
    },
    {
      display: ['flex', 'flex', 'none', 'none', 'flex'],
      left: ['660px', '34%', null, null, '0px'],
      transform: [null, null, null, null, null]
    }
  ];

  // Отримання поточної конфігурації
  const config = configs[counter];

  // Застосування стилів
  allTestimonials.forEach((el, index) => {
    el.style.display = config.display[index];
    if (config.left[index] !== null) el.style.left = config.left[index];
    if (config.transform[index] !== null) el.style.transform = config.transform[index];
  });
}

// Прив'язка подій
testimonRightArrow.addEventListener('click', () => updatingContent('right'));
testimonLeftArrow.addEventListener('click', () => updatingContent('left'));

// Ліва стрілка
testimonLeftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonAllStarsList.length) % testimonAllStarsList.length;
  updateStars(currentIndex);
  updateArrows(currentIndex);
});

// Права стрілка
testimonRightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonAllStarsList.length;
  updateStars(currentIndex);
  updateArrows(currentIndex);
});

// Початковий стан
updateStars(currentIndex);
updateArrows(currentIndex);
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


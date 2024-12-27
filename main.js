const cardList = document.querySelector('.process-item-one');
const cardHeroSection = document.querySelector('.hero-section-one');
const titleContent = document.querySelector('.title-content');
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


// це я робив минулого разу можна дуже сильно скоротити через event.target напевно тому весь гавнокод з масивами можна видалити.
const cardListTwo = document.querySelector('.process-item-two');
const cardListThree = document.querySelector('.process-item-three');
const cardListFour = document.querySelector('.process-item-four');
const cardListFive = document.querySelector('.process-item-five');
const cardListSix = document.querySelector('.process-item-six');

const arrList = [cardListTwo, cardListThree, cardListFour, cardListFive, cardListSix];

function toggleCard(card) {
    card.toggle('active');
}

// function toggleCard(card) {
//     card.classList.toggle('active');

//     if (card.classList.contains('active')) {
//         card.style.backgroundColor = '#b9ff66';
//         cardBtnTwo.innerHTML = '-'
//         divider.style.display = 'block';
//         textContainer.style.display = 'block';
//         card.style.height = '290px';
//         cardHeroSection.style.marginTop = '0vh';
//         titleContent.style.marginTop = '0vh';
//     } else {
//         card.style.backgroundColor = '#f3f3f3';
//         cardBtnTwo.innerHTML = '+'
//         divider.style.display = 'none';
//         textContainer.style.display = 'none';
//         card.style.height = '160px';
//         cardHeroSection.style.marginTop = '4vh';
//         titleContent.style.marginTop = '2.2vh';
//     }
// }

// cardBtn.addEventListener('click', () => {
//     toggleCard(cardListTwo);
// })
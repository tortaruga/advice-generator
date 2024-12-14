const adviceNumber = document.querySelector('.advice-number');
const adviceText = document.querySelector('.advice');
const showAdviceBtn = document.querySelector('.show-advice-btn');

const url = 'https://api.adviceslip.com/advice';

showAdviceBtn.addEventListener('click', () => {
    fetch(url)
    .then(response => response.json())
    .then(advice => {
        adviceNumber.textContent = advice.slip.id; 
        adviceText.textContent = advice.slip.advice;
    })
}) 


// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const buttonOne = document.getElementById('cup-one');
const buttonTwo = document.getElementById('cup-two');
const buttonThree = document.getElementById('cup-three');

const correctEl = document.getElementById('correct');
const wrongEl = document.getElementById('wrong');
const totalEl = document.getElementById('total');

const cups = ['cupOne', 'cupTwo', 'cupThree'];

let correct = 0;
let wrong = 0;
let total = 0;

function getRandomCup() {
    const index = Math.floor(Math.random() * 3);
    const answer = cups[index];
    return answer;
}

function checkGuess(answer, userGuess) {
    total++;
    totalEl.textContent = total;
    if (answer === userGuess) {
        correct++;
        correctEl.textContent = correct;
    } else {
        wrong++;
        wrongEl.textContent = wrong;
    }
}

buttonOne.addEventListener('click', () => {
    getRandomCup();
    checkGuess(getRandomCup(), 'cupOne');  
});
buttonTwo.addEventListener('click', () => {
    getRandomCup();
    checkGuess(getRandomCup(), 'cupTwo');
});
buttonThree.addEventListener('click', () => {
    getRandomCup();
    checkGuess(getRandomCup(), 'cupThree');
});

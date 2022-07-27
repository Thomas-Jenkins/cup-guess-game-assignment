// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const startCupOne = document.getElementById('cup-one-two');
const endCupOne = document.getElementById('cup-one-three');

const startCupTwo = document.getElementById('cup-two-two');
const endCupTwo = document.getElementById('cup-two-three');

const startCupThree = document.getElementById('cup-three-two');
const endCupThree = document.getElementById('cup-three-three');

const ballOne = document.getElementById('winrar-one');
const ballTwo = document.getElementById('winrar-two');
const ballThree = document.getElementById('winrar-three');

const buttonOne = document.getElementById('cup-one');
const buttonTwo = document.getElementById('cup-two');
const buttonThree = document.getElementById('cup-three');
const buttonReset = document.getElementById('reset');
const buttonStart = document.getElementById('start-button');

const correctEl = document.getElementById('correct');
const wrongEl = document.getElementById('wrong');
const totalEl = document.getElementById('total');

const gameBoard = document.getElementById('game-board');
const scoreCard = document.getElementById('score-card');
const instructions = document.getElementById('instructions');

const intro = document.getElementById('intro');

const cups = ['cupOne', 'cupTwo', 'cupThree'];

let correct = 0;
// let wrong = 0;
let total = 0;



function getRandomCup() {
    const index = Math.floor(Math.random() * 3);
    const answer = cups[index];
    return answer;
}

function checkGuess(answer, userGuess) {
    total++;
    totalEl.textContent = total;
    if (answer === cups[0]) {
        ballOne.classList.remove('hidden');
    } else if (answer === cups[1]) {
        ballTwo.classList.remove('hidden');
    } else if (answer === cups[2]) {
        ballThree.classList.remove('hidden');
    }
    if (answer === userGuess) {
        correct++;
        correctEl.textContent = correct;
    } else {
        wrongEl.textContent = total - correct;
        if (answer === cups[0]) {
            startCupOne.classList.add('hidden');
            endCupOne.classList.remove('hidden');
        } else if (answer === cups[1]) {
            startCupTwo.classList.add('hidden');
            endCupTwo.classList.remove('hidden');
        } else if (answer === cups[2]) {
            startCupThree.classList.add('hidden');
            endCupThree.classList.remove('hidden');
        }
        
    }
}
function stopShake(){
    startCupOne.classList.remove('hover');
    endCupOne.classList.remove('hover');
    startCupTwo.classList.remove('hover');
    endCupTwo.classList.remove('hover');
    startCupThree.classList.remove('hover');
    endCupThree.classList.remove('hover');
}    
function startShake(){
    startCupOne.classList.add('hover');
    endCupOne.classList.add('hover');
    startCupTwo.classList.add('hover');
    endCupTwo.classList.add('hover');
    startCupThree.classList.add('hover');
    endCupThree.classList.add('hover');
}


function disableButtons() {
    buttonOne.disabled = true;
    buttonTwo.disabled = true;
    buttonThree.disabled = true;
}

buttonStart.addEventListener('click', () => {
    gameBoard.classList.remove('hidden');
    scoreCard.classList.remove('hidden');
    instructions.classList.remove('hidden');
    intro.classList.add('hidden');
});

buttonOne.addEventListener('click', () => {
    getRandomCup();
    checkGuess(getRandomCup(), 'cupOne'); 
    startCupOne.classList.add('hidden');
    endCupOne.classList.remove('hidden');
    disableButtons();
    stopShake();
});
buttonTwo.addEventListener('click', () => {
    getRandomCup();
    checkGuess(getRandomCup(), 'cupTwo');
    startCupTwo.classList.add('hidden');
    endCupTwo.classList.remove('hidden');
    disableButtons();
    stopShake();
});
buttonThree.addEventListener('click', () => {
    getRandomCup();
    checkGuess(getRandomCup(), 'cupThree');
    startCupThree.classList.add('hidden');
    endCupThree.classList.remove('hidden');
    disableButtons();
    stopShake();
});
buttonReset.addEventListener('click', () => {
    startShake();
    buttonOne.disabled = false;
    buttonTwo.disabled = false;
    buttonThree.disabled = false;
    startCupOne.classList.remove('hidden');
    endCupOne.classList.add('hidden');
    startCupTwo.classList.remove('hidden');
    endCupTwo.classList.add('hidden');
    startCupThree.classList.remove('hidden');
    endCupThree.classList.add('hidden');
    ballOne.classList.add('hidden');
    ballTwo.classList.add('hidden');
    ballThree.classList.add('hidden');
});

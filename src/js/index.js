// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const startGameElement = document.getElementById('button-start');
const RandomNumberElement = document.getElementById('game-text');
const ButtonElement = document.getElementById('button-start');

const GameBoard = 15;
let UserNumberBoard = [];
let PcNumberBoard = [];
let randomNumberBoard = [];

const generateRandomNumber = () => {
  for (let i = 0; i < 100; i++) {
    randomNumberBoard.push(i);
  }
};
generateRandomNumber();

console.log(randomNumberBoard);
console.log(UserNumberBoard);
console.log(PcNumberBoard);

const UserBoard = () => {
  const userBoard = document.getElementById('user-board');

  for (let i = 0; i < GameBoard; i++) {
    let generateNumber = Math.floor(Math.random() * randomNumberBoard.length);
    let randomNumber = randomNumberBoard[generateNumber];

    UserNumberBoard.push(randomNumber);

    let spanElement = document.createElement('span');
    spanElement.classList.add('number');
    spanElement.textContent = randomNumber;
    userBoard.append(spanElement);
  }
};

UserBoard();

const PcBoard = () => {
  const pcBoard = document.getElementById('pc-board');

  for (let i = 0; i < GameBoard; i++) {
    let generateNumber = Math.floor(Math.random() * randomNumberBoard.length);
    let randomNumber = randomNumberBoard[generateNumber];

    UserNumberBoard.push(randomNumber);

    let spanElement = document.createElement('span');
    spanElement.classList.add('number');
    spanElement.textContent = randomNumber;
    pcBoard.append(spanElement);
  }
};

PcBoard();

const CheckNumber = randomNumber => {
  const SpanUser = document.getElementById('user-board');
  const SpanPc = document.getElementById('pc-board');

  SpanUser.forEach(span => {
    if (spanElement.textContent === randomNumber.toString()) {
      span.classList.add('number-user-correct');
    }
  });
};

ButtonElement.addEventListener('click', CheckNumber);
/* let number = 0;

const StartGame = () => {
  const TextGameElement = document.getElementById('game-text');

  const intervalId = setInterval(() => {
    const number = randomNumberBoard();
    console.log(number);

    if (number === 5) {
      clearInterval(intervalId);
    }
  }, 1000);
  TextGameElement.textContent = intervalId;
};

StartGame(); */

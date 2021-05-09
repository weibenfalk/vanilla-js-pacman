import { LEVEL, OBJECT_TYPE } from './setup';
import GameBoard from './GameBoard';
import Pacman from './Pacman';


const gameGrid = document.querySelector('#game');
const scoreTable = document.querySelector('#score');
const startButton = document.querySelector('#start-button');

const POWER_PILL_TIME = 10000;
const GLOBAL_SPEED = 80;
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);


let score = 0;
let timer = null;
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;

function gameOver(pacman, grid) {

}

function checkCollision(pacman, ghosts) {

}

function gameLoop(pacman, ghosts) {

}

function startGame() {
  gameWin = false;
  powerPillActive = false;
  score = 0;
  startButton.classList.add('hide');

  gameBoard.createGrid(LEVEL);
  const pacman = new Pacman(2, 287);
  gameBoard.addObject(287, [OBJECT_TYPE.PACMAN]);
}

//Start Game
startButton.addEventListener('click', startGame);
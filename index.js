
// Game Constants and variables
let direction={x:0,y:0};
const foodSound=new Audio('food.mp3');
const gameOverSound=new Audio('gameover.mp3');
const moveSound=new Audio('move.mp3');
const backgroundMusic=new Audio('music.mp3');

//Main Logic of Game
window.requestAnimationFrame(main);
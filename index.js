
// Game Constants and variables
let direction={x:0,y:0};
const foodSound=new Audio('food.mp3');
const gameOverSound=new Audio('gameover.mp3');
const moveSound=new Audio('move.mp3');
const backgroundMusic=new Audio('music.mp3');
let speed=2;
let lastPaintTime=0;
//Game Fucntions
function main(ctime){
    window.requestAnimationFrame(main); //enters in game loop
    if((ctime-lastPaintTime)/1000 <1/speed){
        return;
    }
    lastPaintTime=ctime;
    gameEngine();
}

function gameEngine(){
    
}






//Main Logic of Game
window.requestAnimationFrame(main);
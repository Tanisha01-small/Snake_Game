
// Game Constants and variables
let direction={x:0,y:0};
const foodSound=new Audio('food.mp3');
const gameOverSound=new Audio('gameover.mp3');
const moveSound=new Audio('move.mp3');
const backgroundMusic=new Audio('music.mp3');
let speed=2;
let lastPaintTime=0;
let snakeArr=[
    {x:13,y:15}
]

food={x:6,y:7};
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
    //Part-1 Update the snake array and food
    //Part-2 Display the snake
    board.innerHTML="";
    snakeArr.forEach((e,index)=>{
        snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
       
        if(index===0){
            snakeElement.classList.add('head');
        }else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });

    //Displae the food
        foodElement=document.createElement('div');
        foodElement.style.gridRowStart=food.y;
        foodElement.style.gridColumnStart=food.x;
        foodElement.classList.add('food');
        board.appendChild(foodElement);
}






//Main Logic of Game
window.requestAnimationFrame(main);

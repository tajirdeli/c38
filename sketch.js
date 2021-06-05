var hypnoticBall, database;
var position;

var gameState=0 
var playerCount
var distance=0
var car1,car2,car3,car4,cars
var allPlayers
var game,form,player
function setup(){
  database = firebase.database();
 
  createCanvas(windowWidth-50,windowHeight-50);
game=new Game() 
game.GetState()
game.Start()
}

function draw(){
  background("white");
  if (playerCount===4){
    game.updateState(1)
  }
 if( gameState===1){
   game.play()
 }
}

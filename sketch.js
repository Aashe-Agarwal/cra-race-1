var  database;
var playerCount,gamestate =0;
var game,form,player,allPlayers,car1,car2,car3,car4,cars;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-50,displayHeight-200);
 game = new Game();
 game.getState();
 game.start();
 
}

function draw(){
  background("white");
  
  if (playerCount===4){
    game.update(1);
  }
    if (gamestate===1){
      clear();
      game.play();
    }
    
  
}


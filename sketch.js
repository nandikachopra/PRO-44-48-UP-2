var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;

var spaceObj;
var spaceObjGroup;
var comet1_img, comet2_img, goldStar_img;
var player_img;

var score1 =0, score2 = 0


function preload(){
  back_img = loadImage("images/space.jpg");
  player1_img = loadImage("images/fairy.png");
  player2_img = loadImage("images/alien.png");
  comet1_img = loadImage("images/Comet1.png");
  comet2_img = loadImage("images/Comet2.png");
  goldStar_img = loadImage("images/goldstar.png");
  spaceObjGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}
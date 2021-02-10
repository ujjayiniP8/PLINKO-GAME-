const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//VARIABLE DECLARATION
var leftsideObj, rightsideObj, bottomObj, topObj;
var groundObj, bgImg;
var engine, world;

var score = 0;

var turn = 0;

var particle;

var gameState = "play";

var divisionHeight = 200 

var plinkos = [];
var divisions = [];

function preload() {
  bgImg = loadImage("bg2.jpg");
}
function setup() {
  createCanvas(1300,600);

  engine = Engine.create();
  world = engine.world;

  leftsideObj = new Boundries(5,790,10,2000);
  rightsideObj = new Boundries(1295,790,10,2000);
  bottomObj = new Boundries(5,595,3000,10);
  topObj = new Boundries(5,5,3000,10);

  groundObj = new Ground(5,785,2000,10);

//LOOPING
  for(var a = 0; a <= width; a = a + 80) {
    divisions.push(new Division(a, height - divisionHeight/2, 10, divisionHeight));
   }

  for(var i = 50; i <= width; i = i + 50) {
      plinkos.push(new Plinko(i, 75, 10));
    }
  
  for(var i = 75; i <= 1250; i = i + 50){
      plinkos.push(new Plinko(i, 125, 10));
    }

  for(var i = 50; i <= width; i = i + 50) {
      plinkos.push(new Plinko(i, 175, 10));
    }

  for(var i = 75; i <= 1250 - 10; i = i + 50){
      plinkos.push(new Plinko(i, 225, 10));
    }

    for(var i = 50; i <= width; i = i + 50) {
      plinkos.push(new Plinko(i, 275, 10));
    }

    for(var i = 75; i <= 1250 - 10; i = i + 50){
      plinkos.push(new Plinko(i, 325, 10));
    }


}



function draw() {
  background(0); 
  Engine.update(engine);
  
  groundObj.display();

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
 }

  for (var i = 0; i < plinkos.length; i++) {   
    plinkos[i].display();
 } 

//TEXT AND TEXT STYLES
  strokeWeight(0);
  stroke("black");
  fill(random(0, 255), random(0, 255), random(0, 255));
  textSize(25);
  textFont("Italic");

  text("Score : " + score, 50, 50);

  text("500", 20, 420);
  text("500", 100, 420);
  text("500", 180, 420);
  text("500", 260, 420);
  text("500", 340, 420);

  text("100", 420, 420);
  text("100", 500, 420);
  text("100", 580, 420);
  text("100", 660, 420);
  text("100", 740, 420);

  text("200", 820, 420);
  text("200", 900, 420);
  text("200", 980, 420);
  text("200", 1060, 420);
  text("200", 1140, 420);
  text("200", 1220, 420);

  if(particle != null) {
    particle.display();

    if(particle.body.position.y > 400){

      if(particle.body.position.x < 420){
           score = score + 500;
           particle = null;

           if(turn >= 5) gameState = "end";
           
    }
     }
  }

  if(particle != null) {
    particle.display();

    if(particle.body.position.y > 400){

      if(particle.body.position.x < 820){
           score = score + 100;
           particle = null;

           if(turn >= 5) gameState = "end";
           
    }
     }
  }

  if(particle != null) {
    particle.display();

    if(particle.body.position.y > 400){

      if(particle.body.position.x < 1300){
           score = score + 200;
           particle = null;

           if(turn >= 5) gameState = "end";
           
    }
     }
  }

//GAMESTATE END
  if(gameState === "end") {
    background(bgImg);

  strokeWeight(3);
  stroke("black");
  fill(random(0, 255), random(0, 255), random(0, 255));
  textSize(50);
  textFont("Italic");

  text("Score : " + score, 150, 100);
  text("Press Space to Restart", 200, 550);
  text("GAME OVER!",460,320);
    
  }
  
  leftsideObj.display();
  rightsideObj.display();
  bottomObj.display();
  topObj.display();

  drawSprites();
 
}

//TURN
function mousePressed(){
  if(gameState !== "end"){
    turn++;
    particle = new Particle(mouseX, 10, 10)
  }
}

//key pressed 
function keyPressed() {
  if(keyCode === 32){
    gameState = "play";
    background(0);
    turn = 0;
    score = 0;
   }
}

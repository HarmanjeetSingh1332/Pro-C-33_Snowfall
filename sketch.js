const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var bg;
//var snow = [];
var snow;
var santa,santaImg;
var voice;


function preload(){
  // load the background image
  bg = loadImage("images/bg.jpg");
  santaImg =  loadAnimation("images/santa1.png","images/santa2.png","images/santa3.png","images/santa4.png","images/santa5.png","images/santa6.png","images/santa7.png","images/santa8.png");
  voice = loadSound("sound/SantaVoice.mp3");
}
function setup() {
  //create canvas
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  santa = createSprite(0,250,10,10);
  santa.visible = false;
  

  snow = new Snowfall(400,10,50,50);
}


function draw() {
  background(bg); 

  Engine.update(engine);

  //if(frameCount%5===0){
    //snow.push(new Snowfall(random(5,995),10,random(5,50),ramdom(5,50)));
    //snow.push(new Snowfall(random(5,995),10,50,50));
  //}

  //for(var s = 0; s < snow.length; s++){
    //snow[s].display();
  //}

  if(snow.body.position.x = 200 ){
    snow.body.destroy();
  }

  snow.display();

  drawSprites();
}

function keyPressed(){
  if(keyCode === 32){
    voice.play();
    santa.visible = true;
    santa.addAnimation("flying",santaImg);
    santa.velocityX = 5;
    santa.velocityY = -0.5;
    santa.lifetime = 150;
  }

}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var steel;
var rubber;
var sand;
var stone;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer=createSprite(200,200,100,50);
	steel=createSprite(500,600,150,100);
	ground=createSprite(400,700,800,50);
	stone=createSprite(300,600,100,100);
	rubber=createSprite(100,600,100,70);
	sand=createSprite(700,600,10,10);


	Engine.run(engine);
   World.Matter.add(hammer);
   World.Matter.add(steel);
   World.Matter.add(sand);
   World.Matter.add(stone);
   World.Matter.add(rubber);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




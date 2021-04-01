
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var hammer,rubber,stone;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer=new Hammer(760,120,150, 90);
	rubber=new Rubber(920,320,70,70)
	stone=new Stone(670,450,70,70);

  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  hammer.display();
  rubber.display();
  stone.display();
 
}




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var object;
var bin1,bin2,bin3;
var ground;
var box1, box2, box3


function preload()
{ 
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies

	paperBall= new Paper(200,450,40);

	ground = new Ground(width/2, 600, width, 20);


	box1=createSprite(860,height-100,325,20);
	box2=createSprite(1030,height-140,20,100);
	box3=createSprite(710,height-140,20,100);
	box1.shapeColor=color(255,0,0)
	box2.shapeColor=color(255,0,0)
	box3.shapeColor=color(255,0,0)



	Engine.run(engine);


}


function draw() {
  rectMode(CENTER);
  background('white');

  paperBall.display();
  ground.display();


	if(paperBall.x<810){

	
	}


  drawSprites();

 
}
function keyPressed(){
	if(keyCode===UP_ARROW){	
	Matter.Body.applyForce(paperBall.body, paperBall.body.position,{x:50, y:-80});	
	}	
	
	}
	
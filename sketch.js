
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,dustbin,ground;
var rect1,rect2,rect3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;
	ball=new Ball(75,100);
	ground=new Ground(600,380,1200,20);
	rect1=new Dustbin(900,330,20,100);
	rect2=new Dustbin(1100,330,20,100);
    rect3=new Dustbin(1000,360,220,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");

  ball.display();
  rect1.display();
  rect2.display();
  rect3.display();
  ground.display();
  
  drawSprites();
}
function keyPressed(){ 
	if(keyCode === UP_ARROW){
		 Body.applyForce(ball.body,ball.body.position,{x:85,y:-85}); 
		} 
	}





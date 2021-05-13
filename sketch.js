// creating NEWTON CARDLE
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ball1, ball2, ball3, ball4, ball5;
var rope1, rope2, rope3, rope4, rope5;

var ropelength, ropestiffness;



function setup() {
	createCanvas(800, 450);
	engine = Engine.create();
	world = engine.world;

	engine.world.gravity.y = 1;

	ropelength = 300;
	ropestiffness = 0;


	//Creating ball and rope 

	ball1 = new bob(260,200,35);
	rope1 = new slingshot(ball1.body,{x:260, y:80},ropelength,ropestiffness);

	ball2 = new bob(330, 200, 35);
	rope2 = new slingshot(ball2.body,{x:330, y:80},ropelength,ropestiffness);

	ball3 = new bob(400, 200, 35);
	rope3 = new slingshot(ball3.body,{x:400, y:80},ropelength,ropestiffness);

	ball4 = new bob(470, 200, 35);
	rope4 = new slingshot(ball4.body,{x:470, y:80},ropelength,ropestiffness);

	ball5 = new bob(590, 100, 35);
	rope5 = new slingshot(ball5.body,{x:540, y:80},ropelength,ropestiffness);

	//Engine.run(engine);
  
}


function draw() {
  background("black");
  Engine.update(engine);
  
  rope1.display();
  ball1.display();

  rope2.display();
  ball2.display();

  rope3.display();
  ball3.display();

  rope4.display();
  ball4.display();

  rope5.display();
  ball5.display();

  rectMode(CENTER);
  fill(200,200,200);
  stroke("white");
  rect(400, 80, 375, 50);
 
 
}




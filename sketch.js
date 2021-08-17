
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var ball
var ground1
var box
function setup() {
  createCanvas(1200, 600);
  rectMode(CENTER)

  engine = Engine.create();
  world = engine.world;
  
  //ground1 = Bodies.rectangle(600, height-10, width, 10 , {isStatic:true} );
  //World.add(world, ground1);
  var option1={
		restitution:0.3,
		friction:0.5,
		density:1.2
	}
  ball=Bodies.circle(height/4, 400, 20, option1)
	World.add(world, ball);

 ground1 = new ground(width/2,600,width,10)
 
 box = new Dustbin(700,500)
	//Create the Bodies Here.
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);


  fill(255,0,255)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y, 20,20);

 
  ground1.display()
  box.display()
  drawSprites();
  
}
function keyPressed() {


  if (keyDown(UP_ARROW)) {

    Matter.Body.applyForce(ball,ball.position,{x:55,y:-75});
  
  }

}

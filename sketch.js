const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, ground, l_wall, r_wall

function setup() {
	createCanvas(800, 700);
    var ground_options = {isStatic: true};
	var ball_options = {isStatic: false, restitution: 0.1, friction: 0, density: 1.2};

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ball = Bodies.circle(200, 100, 30, ball_options);
   ground = Bodies.rectangle(400, 690, 800, 20, ground_options);
   l_wall = Bodies.rectangle(600, 660, 10, 40, ground_options);
   r_wall = Bodies.rectangle(690, 660, 10, 40, ground_options);

   World.add(world, ball);
   World.add(world, ground);
   World.add(world, l_wall);
   World.add(world, r_wall);

	Engine.run(engine);
  
}

function keyPressed(){
   if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball, {x:0, y:0}, {x:50, y:-50});
   }
}

function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 30, 30);
  rect(ground.position.x, ground.position.y, 800, 20);
  rect(l_wall.position.x, l_wall.position.y, 10, 40);
  rect(r_wall.position.x, r_wall.position.y, 10, 40);
}




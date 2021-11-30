
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bola;
var ground;
var cubo;
var caixa;

function setup() {
	createCanvas(600,600);

 var bola_options = {
  restitution: 0.95,
  frictionAir: 0.01
  }
  
  var ground_options = {
	isStatic: true
}

var cubo_options = {
	restitution: 0.7,
	frictionAir: 0.03
	}

var caixa_options = {
	restitution: 0,
	frictionAir: 0.1
	}


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
  bola = Bodies.circle(120,10,20,bola_options);
  World.add(world,bola);

  ground = Bodies.rectangle(300,590,400,20, ground_options);
  World.add(world,ground);

  cubo = Bodies.rectangle(300,10,70,70,cubo_options);
  World.add(world,cubo);  

  caixa = Bodies.rectangle(430,10,120,70,caixa_options);
  World.add(world,caixa);
 

  Engine.run(engine);
  
}


function draw() {
  background(0);
  
  fill("red");
  ellipseMode(RADIUS);
  ellipse(bola.position.x,bola.position.y,40);

  fill("gray")
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600,20)

  fill("red");
  rectMode(CENTER)
  rect(cubo.position.x,cubo.position.y,100,100);

  fill("red")
  rectMode(CENTER)
  rect(caixa.position.x,caixa.position.y,120,70)




  drawSprites();
 
}




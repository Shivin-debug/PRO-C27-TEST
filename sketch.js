const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var chain1, chain2, chain3, chain4, chain5;

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  roof = new Roof(400, 30, 400, 20);

  bob1 = new Bob(400, 230, 70);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("white");

  roof.display();
  bob1.display();                 
  
  drawSprites();
}




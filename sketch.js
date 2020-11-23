const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var division1, division2, division3, division4, division5, divison6;



function setup() {
  createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;
  
  ground1 = new ground(240, 743, 480, 20);
  division1 = new Divisions(70, 633, 13, 300);
  division2 = new Divisions(140, 633, 13, 300);
  division3 = new Divisions(210, 633, 13, 300);
  division4 = new Divisions(280, 633, 13, 300);
  division5 = new Divisions(350, 633, 13, 300);
  division6 = new Divisions(420, 633, 13, 300);

  Engine.run(engine);
  
}

function draw() {
  background("black");  

  ground1.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();

  drawSprites();
}
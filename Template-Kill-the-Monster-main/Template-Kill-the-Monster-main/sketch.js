const Engine  = Matter.Engine;
const World =  Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var ground;
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12,box13;
var box14,box15,box16,box17,box18,box19,box20,box21;
var box22,box23,box24,box25,box26;

var bk;

var hero;
var rope;
var monster;

function preload() {
//preload the images here
bk = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(1200, 500);
  engine = Engine.create();
  world = engine.world;
  // create sprites here

  ground = new Ground(400,360,1200,20);

  box1 = new Box(520,340,30,30);
  box2 = new Box(520,310,30,30);
  box3 = new Box(520,280,30,30);
  box4 = new Box(520,250,30,30);
  box5 = new Box(520,220,30,30);
  box6 = new Box(520,190,30,30);
  box7 = new Box(520,160,30,30);
  
  box8 = new Box(570,340,30,30);
  box9 = new Box(570,310,30,30);
  box10 = new Box(570,280,30,30);
  box11 = new Box(570,250,30,30);
  box12 = new Box(570,220,30,30);
  box13 = new Box(570,190,30,30);

  box14 = new Box(620,340,30,30);
  box15 = new Box(620,310,30,30);
  box16 = new Box(620,280,30,30);
  box17 = new Box(620,250,30,30);
  box18 = new Box(620,220,30,30);
  box19 = new Box(620,190,30,30);
  box20 = new Box(620,160,30,30);
  box21 = new Box(620,130,30,30);

  box22 = new Box(670,340,30,30);
  box23 = new Box(670,310,30,30);
  box24 = new Box(670,280,30,30);
  box25 = new Box(670,250,30,30);
  box26 = new Box(670,220,30,30);
  
  hero = new Hero(150,200,200,100);

  rope = new Rope( hero.body,{x:154,y:167})

  monster = new Monster(800,200,150,150);
}

function draw() { 
 
  background(bk);
  text(mouseX,200,200);
  text(mouseY,230,200);
  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();

  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();

  
hero.display();

rope.display();

monster.display();
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  rope.fly();
}


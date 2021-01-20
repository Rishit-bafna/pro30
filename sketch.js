const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var ground1,ground2;
var heaxgon1,launcher,hexagonI;
function preload(){
    hexagonI = loadImage("polygon.png")
}

function setup(){
createCanvas(1800,800);
engine = Engine.create();
world = engine.world;

ground1 = new Ground(750,730,600,20);
ground2 = new Ground(1400,400,420,20);

hexagon1 = new hexagon(0,0,100);

launcher = new rope(hexagon1.body,{x:190,y:460})

//ground 1
 block1 = new block(510,660,60,100);
 block2 = new block(570,660,60,100);
 block3 = new block(750,660,60,100);
 block4 = new block(930,660,60,100);
 block5 = new block(990,660,60,100);
 block6 = new block(630,660,60,100);
 block7 = new block(810,660,60,100);
 block8 = new block(870,660,60,100);
 block9 = new block(690,660,60,100);

block10 = new block(570,560,60,100);
block11 = new block(630,560,60,100);
block12 = new block(690,560,60,100);
block13 = new block(750,560,60,100);
block14 = new block(810,560,60,100);
block15 = new block(870,560,60,100);
block16 = new block(930,560,60,100);

block17 = new block(630,460,60,100);
block18 = new block(690,460,60,100);
block19 = new block(750,460,60,100);
block20 = new block(810,460,60,100);
block21 = new block(870,460,60,100);

block22 = new block(690,360,60,100);
block23 = new block(750,360,60,100);
block24 = new block(810,360,60,100);

block25 = new block(750,260,60,100);

//ground 2
block26 = new block(1250,340,60,100);
block27 = new block(1310,340,60,100);
block28 = new block(1370,340,60,100);
block29 = new block(1430,340,60,100);
block30 = new block(1490,340,60,100);
block31 = new block(1550,340,60,100);

block32 = new block(1310,240,60,100);
block33 = new block(1370,240,60,100);
block34 = new block(1430,240,60,100);
block35 = new block(1490,240,60,100);

block36 = new block(1370,140,60,100);
block37 = new block(1430,140,60,100);

}
function draw(){
Engine.update(engine);
background("#FF6091");

textSize(28)
text("Drag the hexagonal stone and release it,to launch towards the blocks",50,50);
text("press 'space' to get extra chance",50,100)

ground1.display();
ground2.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
block26.display();
block27.display();
block28.display();
block29.display();
block30.display();
block31.display();
block32.display();
block33.display();
block34.display();
block35.display();
block36.display();
block37.display();

launcher.display();

hexagon1.display();
  
drawSprites();

}

function mouseDragged()
{
	Matter.Body.setPosition(hexagon1.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcher.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(hexagon1.body, {x:50, y:200}) 
	  launcher.attach(hexagon1);
	}
  }

var polygon

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
function preload()      {
    polygon_img=loadImage("polygon.png")
    stone_img=loadImage("wrecking ball.jpg")
    Bg_img=loadImage("cityBackGround.png")
}
function setup() {
engine=Engine.create()
world=engine.world;
createCanvas(1000,700)
ground=new Ground(500,690,1000,20)
ground1=new Ground(150,300,100,10)

  block1 = new Block(300,675,50,70);
  block2 = new Block(350,675,50,70);
  block3 = new Block(400,675,50,70);
  block4 = new Block(300,640,50,70);
  block5 = new Block(350,640,50,70);
  block6 = new Block(400,640,50,70);
  block7 = new Block(300,605,50,70);
  block8 = new Block(350,605,50,70);
  block9 = new Block(400,605,50,70);
  block10 = new Block(300,570,50,70);
  block11 = new Block(350,570,50,70);
  block12 = new Block(400,570,50,70);
 

polygon=Bodies.rectangle(50,200,20,20,{density:1,frictionAir:0.005});
World.add(world,polygon)

sling1=new Slingshot(this.polygon, {x:150,y:300})
}

function draw() {
    background(Bg_img)
    Engine.update(engine);
ground.display();




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
ground1.display();

sling1.display();
imageMode(CENTER);
image(stone_img,polygon.position.x,polygon.position.y,40,40)
}

function mouseDragged() {

    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

//function mouseReleased() {

    //sling1.fly();
   // console.log("inreleased")
//}
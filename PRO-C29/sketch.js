const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

// to declare variables
var ground,wall;
var wall_con;
var bridge;
var stones=[];
var jointPoint;
var jointLink;



function setup() {
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  // to create objects
  ground= new Base(200,680,600,20)
  leftwall= new Base(10,600,100,100)
  rightwall= new Base(490,600,100,100)
  bridge=new Bridge(14,{x:245,y:30})

  // to add the bridge.body and jointPoint
 Matter.Composite.add(bridge.body,jointPoint);
 jointLink= new Link(bridge,jointPoint)

  //to create for loop for stones
  for (var i=0;i<=8;i++){
    var x= random(width/2-200,width/2+300);
    var y= random(-10,140);
    var stone= new Stone(x,y,80,80);
    stones.push(stone);
  }
 
}

function draw() {
  background(51);
  Engine.update(engine);
  
  // to show objects
  ground.show();
  leftwall.show();
  rightwall.show();
  bridge.show();
 
for(var stone of stones){
  stone.show()
}

  


}

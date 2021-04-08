const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object, rectangle

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }
  object = Bodies.circle(200,0,25,{isStatic: true,restitution:2});
    World.add(world,object);

  rectangle = Bodies.rectangle(200,400,400,10,{isStatic:true});
   World.add(world,rectangle); 


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    ellipseMode(RADIUS);
    ellipse(object.position.x,object.position.y,25,25);

    rectMode(CENTER);
    rect(rectangle.position.x,rectangle.position.y,400,10);



}
function keyPressed(){

if (keyCode===DOWN_ARROW){
    Matter.Body.setStatic(object,false)
}



}    




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var paperObject;
var ground;
var dustbin1, dustbin2, dustbin3;
var imagedustbin;
var dustbinObject;

var chain1



function preload()
{
	imagedustbin = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    dustbinObject=createSprite(600,540,20,20);
	dustbinObject.addImage("dustbin1.1",imagedustbin);
	dustbinObject.scale=0.6;
	
	paperObject = new paper(100,580,70);

	ground = createSprite(400,650,800,20);
	ground.shapeColor=color('Yellow');

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
 	
	dustbin1 = new dustbin(510, 545, 20,  170);
	dustbin2 = new dustbin(600, 700, 160, 20);
	dustbin3 = new dustbin(690, 545, 20,  170);

    chain1 = new launcher(paperObject.body, {x:100, y:300});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();
  
  paperObject.display();
  chain1.display();
  
 
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {		
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:785,y:-785}); 
	}
}

function mouseDragged(){
    Matter.Body.setPosition(paperObject.body, {x:mouseX, y:mouseY});

}

function mouseReleased(){
    chain1.fly()
}

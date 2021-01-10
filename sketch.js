const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world, engine;
var dustbin1, dustbin2, dustbin3;
var paper;
var ground;
var bg;
var dustbinImg;

function preload() {
	dustbinImg = loadImage("assets/dustbinFinal.png");
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);


	dustbin1 = new Dustbin(902.5, 185, 20, 230);
	dustbin2 = new Dustbin(699, 185, 20, 230);
	dustbin3 = new Dustbin(800.5, 290, 200, 20);
	ground = new Ground(500, 290, 1200, 20);
	paper = new Paper(65, 50, 75);

}


function draw() {
	Engine.update(engine);
	rectMode(CENTER);
	background("white");
	dustbin1.display();
	dustbin2.display()
	dustbin3.display()
	ground.display();
	paper.display();
	image(dustbinImg,800.5,143,200,238);
	//fill("white");
	//text(mouseX+","+mouseY,mouseX,mouseY);
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 1000, y: -1200 });
	}
}


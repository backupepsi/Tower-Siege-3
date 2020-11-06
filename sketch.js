const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400, 380, width, 20);
    stand = new Ground(500, 300, 200, 7);
    box1 = new Box(375, 275, 50, 50);
    box2 = new Box(425, 275,50,50);
    box3 = new Box(475, 275,50,50);
    box4 = new Box(525, 275,50,50);
    box5 = new Box(575, 275,50,50);
    box6 = new Box(625, 275,50,50);
    //mid
    box7 = new Box(400, 250,50,50);
    box8 = new Box(450, 250,50,50);
    box9 = new Box(500, 250,50,50);
    box10 =new Box(550, 250,50,50);
    box11 =new Box(600, 250,50,50);
    //3rd
    box12 =new Box(425, 225,50,50);
    box13 =new Box(475, 225,50,50);
    box14 =new Box(525, 225,50,50);
    box15 =new Box(575, 225,50,50);
    //4th
    box16 =new Box(500, 200);
    
    hexagon = new Hex(200,600, 30,30)
    sling = new SlingShot(hexagon.body, {x: 300,y:400});

score = 0;    

}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  ground.display();
  stand.display();  
  fill(100, 150, 39);
  box2.display();
  fill(200, 27, 98);
  box3.display();
  fill(1, 100, 230);
  box4.display();
  fill(190, 230, 190);
  box5.display();
  fill(178, 17, 133);
  box8.display();
  fill(129, 154, 195);
  box9.display();
  fill(16, 157, 126);
  box10.display();
  fill(50, 255, 90);
  box13.display();
  fill(240, 140, 90);
  box14.display();
  fill(209, 40, 199);
  box16.display();

  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box8.score();
  box9.score();
  box10.score();
  box13.score();
  box14.score();
  box16.score();
  sling.display();
  
  hexagon.display();
  text("SCORE: "+score, 750,40);
  drawSprites();

}

function mouseDragged() {
  Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if (keyCode===32){
     sling.attach(hexagon.body);
  }
  /*async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/New_York");
    var data = await response.json();

    var date = data.datetime;
    var hour = date.slice(11,13);
    if (hour>=06&&hour<=18){
        bg = "sprites/bg.png";

    }else{
        bg = "sprites/bg2.jpg";
    }
    backgroundImg = loadImage(bg);
}*/
}

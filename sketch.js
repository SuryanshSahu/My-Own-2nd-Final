var gameState="serve";

function preload(){
  smileImage = loadImage("smile1.gif");
  sadImage = loadImage("sad.gif");
  winImage = loadImage("win.gif");
  cupImage = loadImage("cup.png");
}

function setup(){ 
createCanvas (400,400);
wall1 = createSprite(5,200,10,400);
wall2 = createSprite(395,200,10,400);
wall3 = createSprite(395,5,240,10);
wall4 = createSprite(100,5,240,10);
wall5 = createSprite(395,395,320,10);
wall6 = createSprite(80,395,160,10);
wall7 = createSprite(50,60,10,100);
wall8 = createSprite(100,60,10,100);
wall9 = createSprite(150,60,10,100);
wall10 = createSprite(200,60,10,100);
wall11 = createSprite(306,8,10,175);
wall12 = createSprite(350,60,10,100);
wall13 = createSprite(90,150,375,10);
wall14 = createSprite(360,150,65,10);
wall15 = createSprite(50,205,10,100);
wall16 = createSprite(100,205,10,100);
wall17 = createSprite(150,205,10,100);
wall18 = createSprite(200,205,10,100);
wall20 = createSprite(350,205,10,100);
wall21 = createSprite(90,250,275,10);
wall22 = createSprite(360,250,155,10);



wall1.shapeColor= "red";
wall2.shapeColor= "red";
wall3.shapeColor= "red";
wall4.shapeColor= "red";
wall5.shapeColor= "red";
wall6.shapeColor= "red";
wall7.shapeColor= "red";
wall8.shapeColor= "red";
wall9.shapeColor= "red";
wall10.shapeColor= "red";
wall11.shapeColor= "red";
wall12.shapeColor= "red";
wall13.shapeColor= "red";
wall14.shapeColor= "red";
wall15.shapeColor= "red";
wall16.shapeColor= "red";
wall17.shapeColor= "red";
wall18.shapeColor= "red";
wall20.shapeColor= "red";
wall21.shapeColor= "red";
wall22.shapeColor= "red";


smile1 = createSprite(250,10);
smile1.addImage(smileImage);
smile1.scale = 0.2;
  
smile2 = createSprite(250,200);
smile2.addImage(sadImage);
smile2.scale = 0.2;
smile2.visible = false;
  
Winsmile = createSprite(230,200);
Winsmile.addImage(winImage);
Winsmile.scale = 0.7;
Winsmile.visible = false;
  
cup = createSprite(360,350);
cup.addImage (cupImage);
cup.scale = 0.1
}




function draw() {
  background("black");
  if(gameState=="serve") {
    textSize(20);
    fill("white")
    text("PRESS UP ARROW KEY",100,130);

    
    text("SOME WALLS MAKE U DIE",100,280);
    }
  
  if(keyDown("right")){
    smile1.x = smile1.x+5;
  }
  
    if(keyDown("left")){
    smile1.x = smile1.x-5;
  }
  
    if(keyDown("up")){
    smile1.y = smile1.y-5;
    gameState="play";
  }
  
    if(keyDown("down")){
    smile1.y = smile1.y+5;
  }
  
  if(smile1.isTouching(wall7)){
    //wall7.visible = false;
    smile1.visible = false;
    smile2.visible = true;
  }
  
  if(smile1.isTouching(cup)){
    smile1.visible = false;
    Winsmile.visible = true;
  }

  //if(gameState=="play") {}
  drawSprites();
}

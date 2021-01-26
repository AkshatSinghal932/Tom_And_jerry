var cat,mouse,catImage,catStanding,mouseImage,backGround,backGroundImage,catHappy,mouseHappy,mouseStanding,gameState="play";
function preload() {
 mouseStanding=loadImage("jerryFour.png")
 catImage=loadAnimation("tomTwo.png","tomThree.png");
 catStanding=loadImage("tomOne.png");
 catHappy=loadImage("tomFour.png");
 mouseImage=loadAnimation("jerryTwo.png","jerryThree.png");
 catHappy=loadImage("tomFour.png");
 mouseHappy=loadImage("jerryOne.png");  
 backGroundImage=loadImage("garden.png"); 
}

function setup(){
createCanvas(800,600);
backGround=createSprite(400,300);
backGround.addImage(backGroundImage);
 cat =createSprite(640,440,10,10);
 cat.addImage(catStanding);
 cat.scale=0.1;
 mouse=createSprite(140,440,10,10);
 mouse.addImage(mouseStanding);
 mouse.scale=0.1;
cat.debug=true;
cat.setCollider("rectangle",0,0,700,700);
mouse.debug=true;
mouse.setCollider("rectangle",0,0,700,700);
}

function draw() {
background(0,0,0);

drawSprites();
text(mouseX+","+ mouseY,10,45);
if(gameState="play"){
if (keyDown(LEFT_ARROW)){
  cat.velocityX=-3;
  cat.addAnimation("cat running",catImage);
  cat.changeAnimation("cat running");
  mouse.addAnimation("mouse teasing",mouseImage);
  mouse.changeAnimation("mouse teasing");
}
}
if(cat.isTouching(mouse)){
  gameState="end";
  cat.velocityX=0;
  cat.addImage("cat happy",catHappy);
  cat.changeImage("cat happy");
  mouse.addImage("mouse happy",mouseHappy);
  mouse.changeImage("mouse happy");
}

}

function isTouching(p,q){
    if (p.x - q.x < q.width/2 + p.width/2 && q.x - p.x < q.width/2 + p.width/2 && p.y - q.y < q.height/2 + p.height/2 && q.y - p.y < q.height/2 + p.height/2) {      
      }
  }
var score = 0
var arrowGroup;
var rbGroup,bbGroup,gbGroup,pbGroup;



function preload(){
 //load your images here 
 bgImg=loadImage("background0.png")
  redImg=loadImage("red_balloon0.png")
blueImg=loadImage("blue_balloon0.png")
  greenImg=loadImage("green_balloon0.png")
pinkImg=loadImage("pink_balloon0.png")
bowImg = loadImage("bow0.png")
arrowImg = loadImage("arrow0.png")
}

function setup() {
  createCanvas(600, 600);
 bg = createSprite(0,0,600,600);
  bg.addImage("bg",bgImg);
  bg.x = bg.width /2;
  bg.velocityX = -4;  
 bg.scale = 2.5;
  //add code here

  bow = createSprite(520,180)
  bow.addImage(bowImg)
 
  arrowGroup = new Group();
  rbGroup = new Group();
  bbGroup = new Group();
  gbGroup = new Group();
  pbGroup = new Group();
  
  

}
  function draw() {
  //add code here
if (bg.x<0){
bg.x = bg.width/2;
}
bow.y = mouseY
    drawSprites();

 var select_balloon = Math.round(random(1,4));
    console.log(select_balloon)
    
if(World.frameCount % 80 == 0){
  if(select_balloon == 1){
    redBalloon();
  }else if (select_balloon == 2){
    blueBalloon();
  }else if (select_balloon == 3){
    greenBalloon();
  }else{
    pinkBalloon();
  }
}    
    textSize(18);
    fill("red")
    text("score: "+score,500,50)
    
    if (arrowGroup.isTouching(rbGroup)){
      arrowGroup.destroyEach()
      rbGroup.destroyEach()
      score = score+1
    }
    
     if (arrowGroup.isTouching(bbGroup)){
      arrowGroup.destroyEach()
      bbGroup.destroyEach()
      score = score+1
    }
   
     if (arrowGroup.isTouching(gbGroup)){
      arrowGroup.destroyEach()
      gbGroup.destroyEach()
      score = score+1
    }
    
     if (arrowGroup.isTouching(pbGroup)){
      arrowGroup.destroyEach()
      pbGroup.destroyEach()
      score = score+1
    }
    
    if (keyDown("space")){
    createArrow();
  }


  
  }

function createArrow(){
  var arrow = createSprite(520,300,10,10)
  arrow.x = 520
 arrow.y=bow.y
  arrow.addImage(arrowImg)
  arrow.velocityX = -4
  arrow.lifetime = 150
  arrow.scale = 0.5
  arrow.lifetime = 150
  arrowGroup.add(arrow)
}

function redBalloon(){
var redBalloon = createSprite(0,Math.round(random(20,370)), 10,10);
 redBalloon.addImage(redImg)
    redBalloon.scale=0.1
    redBalloon.velocityX = 3
    redBalloon.lifetime = 200
    rbGroup.add(redBalloon)
}
function blueBalloon(){
var blueBalloon = createSprite(0,Math.round(random(20,370)), 10,10);
    blueBalloon.addImage(blueImg)
    blueBalloon.scale=0.1
    blueBalloon.velocityX = 3
    blueBalloon.lifetime = 200
    bbGroup.add(blueBalloon)
}
function greenBalloon(){
var greenBalloon = createSprite(0,Math.round(random(20,370)), 10,10);
    greenBalloon.addImage(greenImg)
    greenBalloon.scale=0.1
    greenBalloon.velocityX = 3
    greenBalloon.lifetime = 200
    gbGroup.add(greenBalloon)
}
function pinkBalloon(){
var pinkBalloon = createSprite(0,Math.round(random(20,370)), 10,10);
    pinkBalloon.addImage(pinkImg)
    pinkBalloon.scale=1
    pinkBalloon.velocityX = 3
    pinkBalloon.lifetime = 200
    pbGroup.add(pinkBalloon)
}


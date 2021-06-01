var movingRect, fixedRect, extraRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(700, 200, 50, 50);

  movingRect = createSprite(100,200,50,50);
  movingRect.velocityX = 5;

  extraRect = createSprite(10,200,50,50);

  
}

function draw() {
  background(255,255,255);  


  if(fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 ){
    movingRect.velocityX = -(movingRect.velocityX)
    fixedRect.shapeColor = movingRect.shapeColor
    extraRect.shapeColor = "grey"
  }
  if(movingRect.x - extraRect.x <= movingRect.width/2 + extraRect.width/2 ){
    movingRect.velocityX = -(movingRect.velocityX)
    extraRect.shapeColor = movingRect.shapeColor
    fixedRect.shapeColor = "grey"
  }
  
  //extra bit i wanted to add
  if(fixedRect.x - movingRect.x === 100){
    movingRect.shapeColor = "blue";
  }
  if(fixedRect.x - movingRect.x === 200){
    movingRect.shapeColor = "red";
  }
  if(fixedRect.x - movingRect.x === 300){
    movingRect.shapeColor = "orange";
  }
  if(fixedRect.x - movingRect.x === 400){
    movingRect.shapeColor = "green";
  }
  if(fixedRect.x - movingRect.x === 500){
    movingRect.shapeColor = "pink";
  }
  if(fixedRect.x - movingRect.x === 600){
    movingRect.shapeColor = "brown";
  }
  drawSprites();
}
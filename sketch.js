var blk1,blk2
function setup() {
  createCanvas(800,400);
  blk1=createSprite(400, 200, 50, 50);
  blk2=createSprite(600, 200, 50, 50)
  blk1.shapeColor="blue"
  blk2.shapeColor="blue"
}

function draw() {
  background(0);  
  blk2.y=World.mouseY;
  blk2.x=World.mouseX;
  if (blk2.x-blk1.x<=blk1.width/2+blk2.width/2 && 
    blk1.x-blk2.x<=blk1.width/2+blk2.width/2 &&
     blk1.y-blk2.y<=blk1.height/2+blk2.height/2 &&
     blk2.y-blk1.y<=blk1.height/2+blk2.height/2){
      blk1.shapeColor="green"
      blk2.shapeColor="green"
  }
  else{
    blk1.shapeColor="blue"
    blk2.shapeColor="blue"
}
  drawSprites();
}
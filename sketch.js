var block1,block2;
var pillar1,pillar2;
var pillar3,pillar4;
var window1,window2,window3,window4;
function setup() {
  createCanvas(600,600);
  block1 = createSprite(220,175,150,200)
  block2 = createSprite(370,225,150,100)
  pillar1 = createSprite(370,130,10,90)
  pillar2 = createSprite(365,90,140,10)
  pillar3 = createSprite(390,130,10,90)
  pillar4 = createSprite(430,130,10,90)
  window1 = createSprite(200,100,20,20)
  window2 = createSprite(240,100,20,20)
  window3 = createSprite(240,130,20,20)
  window4 = createSprite(200,130,20,20)
}

function draw() {
 block1.shapeColor = "blue"
 block2.shapeColor = "green"
 pillar1.shapeColor = "red"
 pillar2.shapeColor = "red"
 pillar3.shapeColor = "red"
 pillar4.shapeColor = "red"
 window1.shapeColor = "white"
 window2.shapeColor = "white"
 window3.shapeColor = "white"
 window4.shapeColor = "white"
  drawSprites();
}
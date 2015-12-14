var player;
var enemy;
var counter =0;
var score =0;
var flashlight = false;
var light = null;
var button;
var gameover = true;
var keyWasPressed = false;


function setup() {
  createCanvas(900, 600);
  
  player = createSprite(300, 450);
  var playerImage = loadImage("http://i.imgur.com/GSt9Wkp.png");
  player.addImage(playerImage);
  
  enemy = createSprite(200, 300);
  var enemyImage = loadImage("http://www.sympato.ch/~dark-ax/temp/requestsprites/mmzx-juggernaut_emp.gif");
  enemy.addImage(enemyImage);
  
  button = createSprite(400, 100, 100, 50);
  
}

function draw() {
  background(255, 240, 220);
  drawSprites();
  
  if (gameover === true) {
    if (score > 2000) {
      alert("great job!");
      score = 0;
    }
  }
  
    if (gameover === true) {
    text("press up to start", 360, 115);
     if (keyDown(UP_ARROW)) {
       gameover = false;
     }
  }
  
  
    if (gameover === false) {
  
  if (keyDown(LEFT_ARROW)) {
    player.position.x = player.position.x - 8;
  }
  if (keyDown(RIGHT_ARROW)) {
    player.position.x = player.position.x + 8;
  }
  if (keyDown(UP_ARROW)) {
    player.position.y = player.position.y - 8;
  }
  if (keyDown(DOWN_ARROW)) {
    player.position.y = player.position.y + 8;
  }
  
  counter = counter + 1;
  if (counter == 100){
    counter = 0;
      enemy.position.y = random(1200);
  enemy.position.x = random(700);
  }
  

  
  if (enemy.position.y > 500) {
    enemy.position.y = 0;
    enemy.position.x = random(300);
    
  }
  
  if (gameover === true) {
    text("press up to start", 360, 115);
     if (keyDown(UP_ARROW)) {
       gameover = false;
     }
  }
  
  //score = score + 1;
  

  
  if (player.position.x >900){
    player.position.x = player.position.x - 10;
  }
      if (player.position.x < 0){
         player.position.x = player.position.x + 10;
      }
    
 
  if (light !== null) {
    light.position.x = player.position.x;
    light.position.y = player.position.y;
  }
  
  if (keyDown(70)) {
    flashlight = true;
  }
  else {
    flashlight = false;
  }
 
  
  
  if (flashlight === true) {
    if (light ===null)
      light = createSprite(player.position.x, player.position.x);
       
  }
  else {
    if (light !==null) {
      light.remove();
      light = null;
    }
  }
  
  text("your score " + score, 360, 100);
  text("x", mouseX, mouseY);
  
  if (player.overlap(enemy)) {
     enemy.position.x = 200;
     enemy.position.y = 100;
    player.position.y = 300;
    player.position.y = 450;
    score = 0;
     alert("Game over your score was" + score);
    gameover = true;
  }
      
     if (keyDown(UP_ARROW) && !keyWasPressed) {
       keyWasPressed = true;
       score = score + 1;
     }
     else {
       keyWas;
     }
      
    }
 }

var spaceship,backgroundImage;


function setup() {
  createCanvas(800,displayHeight);

  spaceship=new spaceShip(displayWidth/2,displayHeight-100,50,50)
backgroundImage=loadImage("images/bgImage2.png")
  
}
function draw() {
  background(rgb(198,135,103));
      image(backgroundImage, 0,-displayHeight*4,displayWidth, displayHeight*5)
      camera.position.x = displayWidth/2;
      camera.position.y = spaceship.y;
    // console.log(spaceship.y)
    if(spaceship.y < 3500){
      backgroundImage.y=displayHeight*4
    }

  if(keyDown("left") && spaceship.x>10){
    spaceship.x = spaceship.x-20
  }
  if(keyDown("right") && spaceship.x<displayWidth-100){
    spaceship.x = spaceship.x+20
  }
  spaceship.display();
  drawSprites();
}
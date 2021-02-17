class spaceShip{
    constructor(x,y,width,height){
        this.velocityY=-5;
        this.width=width
        this.height=height
        this.x=x
        this.y=y
    }
    display(){
        spaceship= createSprite(this.x,this.y,this.width,this.height)
        spaceship.velocityY=-5
  
    }
}
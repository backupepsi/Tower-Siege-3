class Hex {
    constructor(x,y){
      var options={
        isStatic: false
      }
      this.body = Bodies.circle(x,y,30,options);
      this.image = loadImage("images/hex.png");
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,30,30);
      pop();
    }
  }
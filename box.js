class Box {
  constructor(x,y){
    var options={
      isStatic: false
    }
    this.body = Bodies.rectangle(x,y,50,50,options);
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    if (this.body.speed<3){
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,50,50);
    pop();
  }
  else{
    World.remove(world, this.body);
    push();
    this.Visibility = this.Visibility-5;
    tint(255, this.Visibility);
    rect(pos.x, pos.y, 50,50)
    pop();

  }
  }
 score(){
   if(this.Visibility<0 && this.Visibility>=105){
      score++;
   }
  } 
}
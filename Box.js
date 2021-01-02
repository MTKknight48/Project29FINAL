class Block  {
  constructor(x, y){
    var options = {
      'restitution':0.2,
      'friction':0.1,
      'density':0.0001
  }
 
  //  this.image = loadImage("sprites/wood1.png");
  this.body = Bodies.rectangle(x,y,80,80,options);
  this.width = 80;
  this.height = 80;
  World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("blue");
    rect(pos.x, pos.y, this.width, this.height);
  }
};

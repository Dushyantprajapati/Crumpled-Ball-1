class Ball{
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y,20, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("orange");
      fill("orange");
      ellipse(pos.x,pos.y, 20,20);
    }
  };
  
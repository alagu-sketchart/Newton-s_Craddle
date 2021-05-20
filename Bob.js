class Bob{
    constructor(){
      var options = {
        isStatic: false,
        restitution: 1.1,
        friction: 0,
        density: 8
      };
      this.body = Bodies.circle(440, 440, 30, options);
      this.width = 30;
      World.add(world, this.body);
    };
    display() {
      var positions = this.body.position;
      push();
      translate(positions.x, positions.y);
      fill("purple");
      ellipse(0, 0, 60, 60);
      pop();
    }
  }
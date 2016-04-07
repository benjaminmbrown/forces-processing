var Mover = function() {
		this.mass = 1;
		this.position = createVector(30,30);
		this.velocity = createVector(0,0);
		this.acceleration = createVector(0,0);
		this.topspeed = 10;

	this.noff = createVector(random(1000), random(1000));

		this.display = function(){
			stroke(0);
			strokeWeight(2);
			fill(127);
			ellipse(this.position.x, this.position.y, 18,18);
		}

	
  this.checkEdges = function() {
    if (this.position.x > width) {
      this.position.x = width;//bounce off side
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.velocity.x *= -1;//bounce off side
      this.position.x = 0;
    }
    if (this.position.y > height) {
      //this.velocity.y *= -1;
      this.position.y = height;
    }
    if (this.position.y <0 ) {
      //this.velocity.y *= -1;
      this.position.y = height;
    }
  };

		this.applyForce = function(forceType){
			var f = p5.Vector.div(forceType, this.mass);//get force = acc * mass
			this.acceleration.add(f);
		}

		this.update = function(){
			this.velocity.add(this.acceleration);
			this.position.add(this.velocity);
			this.acceleration.mult(0);

		}


}
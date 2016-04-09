// var Mover = function() {
// 		this.mass = 1;
// 		this.position = createVector(30,30);
// 		this.velocity = createVector(0,0);
// 		this.acceleration = createVector(0,0);
// 		this.topspeed = 10;


// 		this.display = function(){
// 			stroke(0);
// 			strokeWeight(2);
// 			fill(127);
// 			ellipse(this.position.x, this.position.y, 18,18);
// 		}

	
// 	  this.checkEdges = function() {
// 	    if (this.position.x > width) {
// 	      this.position.x = width;//bounce off side
// 	      this.velocity.x *= -1;
// 	    } else if (this.position.x < 0) {
// 	      this.velocity.x *= -1;//bounce off side
// 	      this.position.x = 0;
// 	    }
// 	    if (this.position.y > height) {
// 	      //this.velocity.y *= -1;
// 	      this.position.y = height;
// 	    }
// 	    if (this.position.y <0 ) {
// 	      //this.velocity.y *= -1;
// 	      this.position.y = height;
// 	    }
// 	  };

// 		this.applyForce = function(forceType){

// 			//divide the force by the mass of the object
// 			//Ex: m1 equals wind force:     (1,0)
// 			//Divided by mass of 10:    (0.1,0)
// 			var f = p5.Vector.div(forceType, this.mass);//get force = acc * mass Newton's second law
// 			this.acceleration.add(f);
// 		}

// 		this.update = function(){
// 			this.velocity.add(this.acceleration);
// 			this.position.add(this.velocity);
// 			this.acceleration.mult(0);//multiply by zero at the end ot assure individual forces don't accumulate

// 		}

//}

var Mover = function(m, x, y) {
  this.mass = m;
  this.position = createVector(x, y);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);

  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  };
    
  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  };

  this.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(255, 127);
    ellipse(this.position.x, this.position.y, this.mass*16, this.mass*16);
  };

  this.checkEdges = function() {
    if (this.position.x > width) {
      this.position.x = width;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.velocity.x *= -1;
      this.position.x = 0;
    }
    if (this.position.y > height) {
      this.velocity.y *= -1;
      this.position.y = height;
    }
  };

};
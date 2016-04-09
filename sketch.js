var m;
var noiseScale = 0.001;

function setup() {
  createCanvas(440, 260);
  m = new Mover(random(0.1, 5), 0, 0);
}

function draw() {
  background(51);
  //noise() takes  params value, valRangeMin, valRangeMax, desiredRangeMin,desiredRangeMax
  var wind = createVector(0.01, 0);
  var gravity = createVector(0, 0.1);
  console.log(wind);
  console.log(gravity);
  m.applyForce(wind);
  m.applyForce(gravity);


  m.update();
  m.display();
  m.checkEdges();

noiseScale+=0.001;


}



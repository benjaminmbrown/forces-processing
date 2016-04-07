var m;
var noiseScale = 0.001;

function setup() {
  createCanvas(440, 260);
  m = new Mover();
}

function draw() {
  background(51);
  //noise() takes  params value, valRangeMin, valRangeMax, desiredRangeMin,desiredRangeMax
  var sideWindRate = noise(noiseScale,  0,1,0,width);
  var wind = createVector(sideWindRate, 0);
  console.log(wind);
 // var wind = createVector(sideWindRate, vertWindRate);
  var gravity = createVector(0, 0.01);
  console.log(gravity);
  m.applyForce(wind);
  m.applyForce(gravity);


  m.update();
  m.display();
  m.checkEdges();

noiseScale+=0.001;


}



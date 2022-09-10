function setup(){
  createCanvas(windowWidth,windowHeight);
  background(0);

}
function draw(){
  
  translate(width/2, height/2);
  noFill();
  strokeWeight(2)
  stroke(255);
  beginShape();

  for(var a = 0 ; a < TWO_PI ; a+=0.01){
    var r = 4;
    var x = r*(16 *pow(sin(a),3));
    var y = -r*(13 *cos(a)-5*cos(2*a)-2*cos(3*a)-cos(4*a));
    vertex(x, y);
  
  }
  endShape();

}
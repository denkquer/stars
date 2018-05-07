let stars = [];


function setup() {
  let coin = createCanvas(innerWidth, innerHeight, WEBGL);
  for (let i = 0; i < 2000; i++) {
    stars.push(new Star());
  }
  //true fullscreen! canvas only
  coin.canvas.style.display = 'block';

  mouseX = width / 2;
  mouseY = height / 2;
}

function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
}

function draw() {
  background(0);

  //translate(-width / 2, -height / 2, 0);
  camera(0, 0, 500 / tan(PI * 30.0 / 180.0), (width / 2 - mouseX) / 2, (height / 2 - mouseY) / 2, 0, 0, 1, 0);

  stars.forEach(function(Star) {
    Star.show();
    Star.update();
  });
}

let Star = function() {

  this.x = random(-width * 2, width * 2);
  this.y = random(-height * 2, height * 2);
  this.z = random(-300, 300);
  this.speed = random(4, 9) / 3;

  this.show = function() {
    push();
    //translate(-width / 2, -height / 2, 0);
    translate(this.x, this.y, this.z);
    stroke(255);
    sphere(this.z / 300);
    pop();
  }

  this.update = function() {
    this.z += this.speed;
    if (this.z > 1000) {
      this.z = -300;
    }
  }
}
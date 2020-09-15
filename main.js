// The below codes are MDN content.
// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// This function takes two numbers as arguments, and returns a random number in the range between the two.

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;   //x and y coordinates 
  this.velX = velX;
  this.velY = velY;   //horizontal and vertical velocity
  this.color = color;
  this.size = size;   //this is its radius, in pixels.
}

//add draw() method to the Ball()'s prototype. ctx is the 2D canvas context defined earlier 
Ball.prototype.draw = function() {
  ctx.beginPath();   
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);   // trace an arc shape on the paper. "0, 2 * Math.PI" are the start and end number of degrees around the circle that the arc is drawn between, equivalent to 360 degrees in radians. 1 radian = 180 degrees/pi.
  ctx.fill();
}

// create a new ball instance:
let testBall = new Ball(50, 100, 4, 4, 'blue', 10);

testBall.x
testBall.size
testBall.color
testBall.draw()

//to actually move the ball, need add an update() method to the Ball()'s prototype:

Ball.prototype.update = function() {
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY; //add velX value to x coordinate, and velY value to y coordinate — the ball is in effect moved each time this method is called.


  //add in collision detect (complex)
  Ball.prototype.collisionDetect = function() {
    for (let j = 0; j < balls.length; j++) {
      if (!(this === balls[j])) {   // check whether the current ball (i.e., the ball whose collisionDetect method is being invoked) is the same as the loop ball (i.e., the ball that is being referred to by the current iteration of the for loop in the collisionDetect method). Then use ! to negate the check, so that the code inside the if statement only runs if they are not the same.
        const dx = this.x - balls[j].x;
        const dy = this.y - balls[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);  // collision is overlapping of two circle's areas. 
  
        if (distance < this.size + balls[j].size) {
          balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
        }
      }
    }
  }
}

//the above first four parts of the function check whether the ball has reached the edge of the canvas. If it has, we reverse the polarity of the relevant velocity to make the ball travel in the opposite direction. 

// Animating the ball 

//The while loop creates a new instance of our Ball() using random values generated with our random() function, then push()es it onto the end of our balls array, but only while the number of balls in the array is less than 25. 

let balls = [];

while (balls.length < 25) {
  let size = random(10,20);
  let ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size,width - size),
    random(0 + size,height - size),
    random(-7,7),
    random(-7,7),
    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
    size
  );

  balls.push(ball);
}

function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';  //set to semi-transparent to allow the previous few frames to shine through slightly.
  ctx.fillRect(0, 0, width, height); // four parameters provide a start coordinate, and a width and height for the rectangle drawn (this overs up the previous frame's drawing before the next one is drawn.)

  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect(); // add in collision detection
  }

  requestAnimationFrame(loop); //recursively — the function is calling itself every time it runs.
}

loop()


var ball = {
  x:0,
  y:250,
  speed: {x: 1,y: 1},
  draw:function (){
    
    
    noStroke()
    fill(255,131,131)
    
    //bottom
    if (this.y > 500) {
      this.speed.y = this.speed.y * - 1;
    } 
    //right 
    if (this.x > 500) {
      this.speed.x = this.speed.x * -1;
    }
    
    
    
    this.x= this.x+ this.speed.x;
    this.y= this.y+ this.speed.y;
    rect(this.x,this.y,10,10);
  }
    
};
function setup (){
  resizeCanvas (500,500);
  background (240);
}

function draw() {
  
  ball.draw();
}

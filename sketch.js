var car,wall
var wall2
var speed, weight; 

function setup() {
  createCanvas(1600,1000);
  
car=createSprite(50, 200)
wall = createSprite(1500, 200, 60,  height/2)





   speed=random(55,90)
    weight=random(400, 1500)

    car.velocityX = speed;
}

function draw() {
  background(200);  
  
  
  if((wall.x - car.x<(car.width + wall.width) /2)){
     car.velocityX = 0
     var deformation = 0.5 * weight * speed * speed/22500    
  }
  
  if(deformation < 100){
    car.shapeColor = "green"
  }

  
  if(deformation > 100 && deformation < 180){
    car.shapeColor = "yellow"
  }
  
  if(deformation > 180){
    car.shapeColor = "red"
  }
  drawSprites();
}
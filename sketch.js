var car,wall;

var speed, weight;  

function setup() {
  createCanvas(1600,400);
  
  wall=createSprite(1400,200,60,height/2);
  wall.shapeColor=color(80,80,80); 
 
  speed=random(20,80);
  weight=random(400,1500);
  
  car = createSprite(50,200,50,50);
  car.velocityX= speed;
  car.shapeColor=color(255);

  


  console.log(speed);
  console.log(weight);


}

function draw() {
  background(90,312,234);
  
  if((wall.x-car.x)< wall.width*0.8)
  {
    car.velocityX=0;
    var deformation= 0.5* width* speed* speed/22500;
    if (deformation>180)
    {
     car.shapeColor=color(255,0,0);
    }
    if (deformation>100 && deformation<180)
    {
      car.shapeColor=color(230,230,0);
    }
    if (deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}

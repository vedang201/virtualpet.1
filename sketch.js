//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImage,happyDogImage;

function preload()
{
  //load images here
  dogImage = loadImage("Dog.png");
  happyDogImage = loadImage("happyDog");
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  dog = createSprite(200,200,20,20);
  dog.addImage(dogImage);

  
}


function draw() {  

  drawSprites();
  //add styles here

  if (keyWentDown(UP_ARROW)){

    writeStock(foodS)
    dog.addImage(happyDogImage);
  }




}
function writeStock(x){

  if(x<= 0){
    x=0;
  }
  else{
    x=x-1;
  }
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg= "sunrise1.png" ;

function preload() {
     getBackgroundImg() 
     
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if (backgroundImg)
    background(backgroundImg);


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
var responseJson= await response.json()
console.log("Time",responseJson)

    // write code slice the datetime
var datetime= responseJson.datetime
var hour=datetime.slice(11,13)

console.log(hour)

    // add conditions to change the background images from sunrise to sunset
if(hour>=06&&hour<=08){
    bg="sunrise1.png"
}else if(hour>=09&&hour<=11){
    bg="sunrise2.png"
}else if(hour>=11&&hour<=13){
    bg="sunrise3.png"
}else if(hour>=13&&hour<=15){
    bg="sunrise4.png"
}else if(hour>=15&&hour<=17){
    bg="sunrise5.png"
}else if(hour>17&&hour<=19){
    bg="sunrise6.png"
}else if(hour>=19&&hour<=19.15){
    bg="sunset7.png"
}else if(hour>=19.15&&hour<=19.30){
    bg="sunset8.png"
}else if(hour>=19.30&&hour<=19.45){
    bg="sunset9.png"
}else if(hour>=19.45&&hour<=20){
    bg="sunset10.png"
}else if(hour>=20&&hour<=03){

    bg="sunset11.png"
}else{
    bg="sunset12.png"
}
    //load the image in backgroundImg variable here

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}

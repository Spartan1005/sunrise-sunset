const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){


    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var response=await fetch("https://worldtimeapi.org/api/timezone/America/Toronto")
    var responsejson=await response.json()
    var datetime=responsejson.datetime
    var time=datetime.slice(11,13)
    if (time>=00 && time<=02) {
        bg="sunrise1.png"
    } 

    if (time>=02 && time<=04) {
        bg="sunrise2.png"
    } 
    if (time>=04&& time<=06) {
        bg="sunrise3.png"
    } 
    if (time>=06 && time<=08) {
        bg="sunrise4.png"
    } 
    if (time>=08 && time<=10) {
        bg="sunrise5.png"
    } 
    if (time>=10 && time<=12) {
        bg="sunrise6.png"
    } 
    if (time>=12 && time<=14) {
        bg="sunset7.png"
    } 
    if (time>=14 && time<=16) {
        bg="sunset8.png"
    } 
    if (time>=16 && time<=18) {
        bg="sunset9.png"
    }
    if (time>=18 && time<=20) {
        bg="sunset10.png"
    }  
    if (time>=20 && time<=22) {
        bg="sunset11.png"
    } 
    if (time>=22 && time<=24) {
        bg="sunset12.png"
    } 
    backgroundImg=loadImage(bg)
}

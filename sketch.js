let img1;
let img2;
let s;

function preload(){
    img1 = loadImage('sig.jpg')
    //img2 = loadImage()
}

function setup(){
    createCanvas(400,400);
    colorMode(HSB);
    imageMode(CENTER);
    noCursor();
    s = "I Love Coding!"
}

function draw(){
    background(255)
image(img1,width/2,height/2);
//img2
    fill(255);
    textsize(30);
    text(s,0,40);
}
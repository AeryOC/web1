let img1;

function preload(){
    img1 = loadImage("../../media/sig.png");
}
function setup(){
    createCanvas(400,800);
    noStroke();
    
  }
  function draw(){
    background(21);
      fill(162,214,216,90);
      img1(0,0);
      
    if (mouseX <= width/8) {
      rect(0,0,width/8,height);         //1/8
    }else if (mouseX < width*2/8) {
      rect(width/8,0,width/8,height);   //2/8
    }else if (mouseX < width*3/8) {
      rect(width*2/8,0,width/8,height); //3/8
    }else if (mouseX < width*4/8) {
      rect(width*3/8,0,width/8,height); //4/8
    }else if (mouseX < width*5/8) {
      rect(width*4/8,0,width/8,height); //5/8
      }else if (mouseX < width*6/8) {
      rect(width*5/8,0,width/8,height); //6/8
      }else if (mouseX < width*7/8) {
      rect(width*6/8,0,width/8,height); //7/8
    } else {
     rect(width*7/8,0,width,height);    //8/8
    }
  }
    
    
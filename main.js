function preload() {

}

function setup() {
  canvas = createCanvas(600, 600);
  canvas.center();
  video = createCapture(VIDEO)
  video.hide();
}

function draw() {
image(video, 200 , 200, 200, 200)
fill(255,0,0);
stroke(255,0,0);
circle(50,50,80);
circle(500,50,80);
circle(50,500,80);
circle(500,500,80);
fill(0,255,0);
stroke(0,255,0);
rect(20,80, 50, 400);
rect(80,30, 400, 50);
rect(470,80, 50, 400);
rect(80,475, 400, 50);
}


function picture(){
  save('krish.png');
}
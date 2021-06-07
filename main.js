noseX=0;
noseY=0;
leftwristY=0;
rightwristY=0;
difference=0;
function setup()
{
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(500,500);
canvas.position(600,100);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw()
{
background('#0095E6');
document.getElementById("labelpx").innerHTML="Font size of the label is= "+difference+"px";
fill('#6DA0FF');
stroke('#C89D5A');
Text(Font,leftwristY,rightwristY);
labelSize(noseX,noseY,difference);
}
function modelLoaded()
{
console.log('poseNet is initialized');
}
function gotPoses(results)
{
if(results.length>0)
{
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("noseX= "+noseX+"noseY= "+noseY);
leftwristY=results[0].pose.leftWrist.y;
rightwristY=results[0].pose.rightWrist.y;
difference=floor(leftwristY+rightwristY);
console.log("leftwristY= "+leftwristY+"rightwristY= "+rightwristY+"difference= "+difference);
}
}
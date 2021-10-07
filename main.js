leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
song="";
function preload(){
    song=loadSound("yorktown.mp3.mp3");
}
function setup(){
    canvas=createCanvas(600, 475);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    if(results.legnth>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.leftWrist.x;
        rightWristY=results[0].pose.leftWrist.y;
    }
}
function modelLoaded(){
    console.log('poseNet>In');
}
function draw(){
    image(video, 0, 0, 600, 475);
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
"use strict";
var line=document.getElementById("line");
var ctx=line.getContext("2d");
ctx.fillStyle="white";
var x= 0,y = 0,w= 0,h= 2,cw=800,cy=2;
function drawline(){
    x=(cw-w)/2;
    ctx.clearRect(0,0,800,2);
    ctx.fillRect(x,y,w,h);
    w+=20;
}
window.onload= function () {
    audio.play();
    var timerLine=setInterval(function () {
        drawline();
        if(w>=800){
            clearInterval(timerLine);
            timerLine=null;
        }
    },40)
}

var REd=document.getElementById("on");
var Yellow=document.getElementById("yellow");
var green=document.getElementById("green");
var imgR=document.getElementById("bulb");
var imgY=document.getElementById("Y");
var imgG=document.getElementById("g");

function bulb_on(){
    imgG.src="wi.png"
     imgY.src="wi.png"
    imgR.src="re.png";
}
function light_off(){
       imgR.src=" wi.png"
       imgG.src="wi.png"
    imgY.src="ye.png";
}
function gr(){
    imgR.src="wi.png"
     imgY.src="wi.png"
    imgG.src="gr.png";
}
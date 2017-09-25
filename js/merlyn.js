var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
canvas.addEventListener("mousedown", plopImg, false);


var honeySound = new Howl({
  urls: ['audio/honey.mp3']
});
var kevinSound = new Howl({
  urls: ['audio/head.mp3']
});
var menSound = new Howl({
  urls: ['audio/men.mp3']
});
var hondaSound = new Howl({
  urls: ['audio/honda.mp3']
});
var kidsSound = new Howl({
  urls: ['audio/kids.mp3']
});


  $( window ).resize(function() {
  context.canvas.width  = window.innerWidth;
  context.canvas.height = window.innerHeight;

  		var bgObj = new Image();
		bgObj.onload = function(){
			context.drawImage( bgObj, 0, 0 ,context.canvas.width ,  context.canvas.height);
		};
		bgObj.src = 'images/whataburger.jpg';
});
	
$(document).ready(function(){
		context.canvas.width  = window.innerWidth;
		context.canvas.height = window.innerHeight;
		var bgObj = new Image();
		bgObj.onload = function(){
			context.drawImage( bgObj, 0, 0 , context.canvas.width ,  context.canvas.height);
		};
		bgObj.src = 'images/whataburger.jpg';

});
	
		
function plopImg(event)
{
  var x = event.clientX;
  var y = event.clientY;
  var imageObj = new Image();
  imageObj.onload = function() {
    context.drawImage(imageObj, x - 200, y - 200);
  };

var rng = (Math.floor((Math.random() * 150) + 1))   
 if (rng == 150){
	imageObj.src = 'images/dumbass.jpg';
	kevinSound.play();
 }  else if (rng == 149) {
    imageObj.src = 'images/bath.jpg';
    menSound.play();
 }  else if (rng == 148) {
    imageObj.src = 'images/somerlyn.png';
    hondaSound.play();
 }  else if (rng >= 110 && rng <= 147){
    imageObj.src = 'images/kids.jpg';
    kidsSound.play();
 }  else {
    imageObj.src = 'images/merlyn.jpg';
    honeySound.play();
}

}



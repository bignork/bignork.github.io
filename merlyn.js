var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
canvas.addEventListener("mousedown", plopImg, false);


var sound = new Howl({
  urls: ['audio/honey.mp3']
});
var altSound = new Howl({
  urls: ['audio/head.mp3']
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
 if ((Math.floor((Math.random() * 15) + 1)) == 15){
	imageObj.src = 'images/dumbass.jpg';
	altSound.play();
 } else {
	imageObj.src = 'images/merlyn.jpg';
	sound.play();
 }

}



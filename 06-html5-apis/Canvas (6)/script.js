$(document).ready(function() { 
  var x =  0,
      y = 15,
      speed = 2;

  function animate() {
      reqAnimFrame = window.mozRequestAnimationFrame    ||
                     window.webkitRequestAnimationFrame ||
                     window.msRequestAnimationFrame     ||
                     window.oRequestAnimationFrame;
      reqAnimFrame(animate);
      x += speed;
      if(x <= 0 || x >= 650){
          speed = -speed;
      }
      draw();
  }

  function draw() {
      var $canvas = $('.mainCanvas');
      var context = $canvas[0].getContext('2d');
      context.clearRect(0, 0, 800, 170);
      context.fillStyle = "#f00";
      context.fillRect(x, y, 150, 150);
  }
  
  animate();

})



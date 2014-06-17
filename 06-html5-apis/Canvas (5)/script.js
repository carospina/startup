$(document).ready(function() {
  var $canvas = $('.mainCanvas'),
      context = $canvas[0].getContext('2d');
  for (var i=1; i<20; i++) { //rectangles
    context.fillStyle = getRandomColor();
    context.fillRect(getRandomPosition(800),getRandomPosition(500),400,75);  
  }
  for (var i=1; i<15; i++) { //lines
    context.lineTo(getRandomPosition(800),getRandomPosition(500)); 
    context.stroke();
  }
  for (var i=1; i<10; i++) { //circles
    context.beginPath();
    context.arc(getRandomPosition(800),getRandomPosition(500),40,0,2*Math.PI); 
    context.fill();
    context.fillStyle = getRandomColor();
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getRandomPosition(max) {
    return Math.floor(Math.random()*max);    
  }

})



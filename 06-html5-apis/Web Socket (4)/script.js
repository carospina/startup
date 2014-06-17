$(document).ready(function() {
  var $sendButton = $(".sendButton"),
      $inputArea = $(".inputArea"),
      $response = $(".response");

  var connection = new WebSocket('ws://echo.websocket.org/');

  $sendButton.click(function() {
    var input = $inputArea.val();
    console.log($inputArea.val());
    connection.send(input);
    console.log('Sent: '+input);
  });

  connection.onerror = function (error) {
    console.log('WebSocket Error: ' + error);
  };

  connection.onmessage = function (e) {
    $response.val(e.data);
    console.log('Server: ' + e.data);
  };

})
$(document).ready(function() {
  var $dragArea = $('.dragArea'),
      $dropArea = $('.dropArea');
  $.event.props.push( "dataTransfer" );    

  $dragArea.bind("dragenter", function(e){
    e.preventDefault();
  });

  $dragArea.bind("dragleave", function(e){
    e.preventDefault();
  });

  $dragArea.bind("dragover", function(e){
    e.preventDefault();
  });

  $dragArea.bind("drop", function(e){
    e.preventDefault();
    var files = e.dataTransfer.files;
    console.log(files);
    $dropArea.html('');
    for (var i=0; i<files.length; i++) {
      var reader = new FileReader();
      reader.fileName = files[i].name;
      reader.onloadend = function(e) {
        $dropArea.append('file: '+e.target.fileName+' contenido: '+e.target.result+'\r\n');
      };
      reader.readAsText(files[i]);
    }
  });

})



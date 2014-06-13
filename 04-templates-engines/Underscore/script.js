$(document).ready(function(){  
  $.getJSON('data.json', function(data){
    var source   = $("#entry-template").html();
    var template = _.template(source);
    var html = template(data);
    $("#content").html(html);
  });
});
$(document).ready(function(){  
  $.getJSON('data.json', function(data){
    var source   = $("#entry-template").html();
    var compiled = dust.compile(source,"profile");
    dust.loadSource(compiled);
    dust.render("profile",data, function(err,out) {
      $("#content").html(out);
    });
  });
});
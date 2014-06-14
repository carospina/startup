define(['backbone'], function(Backbone) {
  var Movie = Backbone.Model.extend ({
      defaults: {
          'title':'none'
      },
      inicialize: function() {},
      play: function() {
        console.log(this.get('title')+' is playing..');
      },
      stop: function() {
        console.log(this.get('title')+' is stopped');
      }
  });
  return Movie;
});
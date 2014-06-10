define(['Director'], function() {
  var atts = {},
      Movie = function(){};
  Movie.prototype = {
    play: function() {
      console.log('Playing..');
      return this;
    },
    stop: function() {
      console.log('Stopped');
      return this;
    },
    set: function(attribute,value) {
      atts[attribute] = value;
      return this;
    },
    get: function(attribute) {
      return atts[attribute];
    },
  }
  return Movie;
});

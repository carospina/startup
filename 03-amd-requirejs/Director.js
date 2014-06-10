define( function() {
  var name = '',
      quotes = [],
      Director = function(dname){
        name = dname;
      };
  Director.prototype = {
    getName: function() {
      return name;
    },
    addQuote: function(quote) {
      quotes = quotes.concat(quote);
      return this;
    },
    speak: function() {
      return name+' says: <br>'+quotes.join('<br>');
    }
  }
  return Director;
});

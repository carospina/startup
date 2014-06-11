function Movie() {
  this.atts = {};

  this.play = function() {
    console.log('Playing...');
    return this;
  };

  this.stop = function() {
    console.log('Stopped');
    return this;
  };

  this.set = function(attribute,value) {
    this.atts[attribute] = value;
    return this;
  };  

  this.get = function(attribute) {
    return this.atts[attribute];
  };  
};

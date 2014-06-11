function Movie() {
  this.atts = {};
};

Movie.prototype.play = function() {
  console.log('Playing...');
  return this;
};

Movie.prototype.stop = function() {
  console.log('Stopped');
  return this;
};

Movie.prototype.set = function(attribute,value) {
  this.atts[attribute] = value;
  return this;
};

Movie.prototype.get = function(attribute) {
  return this.atts[attribute];
};

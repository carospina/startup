function Movie() {
  this.atts = {};
  this.observers = [];
};

Movie.prototype.play = function() {
  this.notify('Playing..');
  return this;
};

Movie.prototype.stop = function() {
  this.notify('Stopped');
  return this;
};

Movie.prototype.set = function(attribute,value) {
  this.atts[attribute] = value;
  return this;
};

Movie.prototype.get = function(attribute) {
  return this.atts[attribute];
};

Movie.prototype.notify = function(action) {
  for (var i=0; i<this.observers.length; i++) {
    this.observers[i].update(action, this.get('title'));
  }
};

Movie.prototype.addSubscriber = function(observer) {
  this.observers.push(observer);
  return this;
};

Movie.prototype.removeSubscriber = function(observer) {
  var value = this.observers.indexOf(observer);
  if (value >= 0) {
    this.observers.splice(value,1);
  }
  return this;
};

var MovieObserver = {
  update: function (action,title) {
    console.log(action +' '+title);
  }
};


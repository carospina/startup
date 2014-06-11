function Movie() {
  this.atts = {};
  this.observers = [];

  this.play = function() {
    this.notify('Playing..');
    return this;
  };

  this.stop = function() {
    this.notify('Stopped');
    return this;
  };

  this.set = function(attribute,value) {
    this.atts[attribute] = value;
    return this;
  };

  this.get = function(attribute) {
    return this.atts[attribute];
  };

  this.notify = function(action) {
    for (var i=0; i<this.observers.length; i++) {
      this.observers[i].update(action, this.get('title'));
    }
  };

  this.addSubscriber = function(observer) {
    this.observers.push(observer);
    return this;
  };

  this.removeSubscriber = function(observer) {
    var value = this.observers.indexOf(observer);
    if (value >= 0) {
      this.observers.splice(value,1);
    }
    return this;
  };
};

var MovieObserver = {
  update: function (action,title) {
    console.log(action +' '+title);
  }
};

var DownloadableMovie = function (){
  Movie.call(this);
  this.download = function(){
    console.log(this.get('title')+' is downloading..'); 
  };
}

var Social = {
  share: function(friendname,what) {
    console.log('Shared with '+friendname);
  },
  like: function() {
    console.log('LIKE!');
  }
};

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination; 
};

var Movie = (function() {
  var atts = {},
      observers = [],
      Movie = function(){};
  var notify = function(action,title) {
    for (var i=0; i<observers.length; i++) {
      observers[i].update(action,title);
    }
  };
  Movie.prototype = {
    play: function() {
      notify('Playing', this.get('title'));
      return this;
    },
    stop: function() {
      notify('Stopped', this.get('title'));
      return this;
    },
    set: function(attribute,value) {
      atts[attribute] = value;
      return this;
    },
    get: function(attribute) {
      return atts[attribute];
    },
    addSubscriber: function(observer) {
      observers.push(observer);
      return this;
    },
    removeSubscriber: function(observer) {
      var value = observers.indexOf(observer);
      if (value >= 0) {
        observers.splice(value,1);
      }
      return this;
    }
  }
  return Movie;
})();

var MovieObserver = {
  update: function (action,title) {
    console.log(action +' '+title);
  }
};

function DownloadableMovie() {
};

DownloadableMovie.prototype = new Movie();

DownloadableMovie.prototype.download = function() {
  console.log(this.get('title')+' is downloading..');
};

var Social = {
  share: function(friendname) {
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

function Actor() {
  this.atts = {};
};

Actor.prototype.set = function(attribute,value) {
  this.atts[attribute] = value;
  return this;
};

Actor.prototype.get = function(attribute) {
  return this.atts[attribute];
};

//Example
var m = new Movie();
m.set('title','Avatar');
m.set('year','2009');
var samWorthington = new Actor();
samWorthington.set('name','Sam Worthington');
var zoeSaldaña = new Actor();
zoeSaldaña.set('name','Zoe Saldaña');
m.set('actors',[samWorthington,zoeSaldaña]);
console.log('Title of the movie: '+m.get('title'));
console.log('Year: '+m.get('year'));
extend(m,Social);
m.like();
m.addSubscriber(MovieObserver);
m.play();
console.log('...');
m.stop();
m.share('Facebook friends');
console.log('');
console.log('Downloadable movie:');
d = new DownloadableMovie();
d.set('title','The Hobbit');
d.download();

/* 11. Show how you would add an array of actors to a Movie object
  actor1 = new Actor();
  actor2 = new Actor();
  m = new Movie();
  m.set('actors',[actor1,actor2]);
*/

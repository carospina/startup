define(['backbone','modules/Movie','backbone.localstorage'], function(Backbone,Movie) {
  var ListMovie = Backbone.Collection.extend ({
      model: Movie,
      localStorage: new Backbone.LocalStorage("movies-backbone")
  });
  return ListMovie;
});
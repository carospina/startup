require.config ({
  baseUrl:'./lib/',
  paths: {
    'modules':'../modules'
  },
  shim: {
    'backbone': {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    },
    'jquery': {
      exports: '$'
    }
  }
});

require(['modules/ListView','modules/ListMovie','modules/View'], function(ListView,ListMovie,View) {
  $(document).ready(function(){
    var listMovie = new ListMovie();
    var view = new View(listMovie,ListView);
    listMovie.create({
      "title":"Inception",
      "year":"2010",
      "director":"Cristopher Nolan",
      "synopsis":"A skilled extractor is offered a chance to regain his old life as payment for a task considered to be impossible."
    });
    listMovie.create({
      "title":"Sherlock Holmes",
      "year":"2009",
      "director":"Guy Ritchie",
      "synopsis":"Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat to all of England."
    });
    listMovie.create({
      "title":"Monsters, Inc.",
      "year":"2001",
      "director":"Pete Docter, Lee Unkrich, David Silverman",
      "synopsis": "Monsters generate their city's power by scaring children, but they are terribly afraid themselves of being contaminated by children, so when one enters Monstropolis, top scarer Sulley finds his world disrupted."
    });
    listMovie.create({
      "title":"Avatar",
      "year":"2009",
      "director":"James Cameron",
      "synopsis":"A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
    });
    listMovie.create({
      "title":"Life of Pi",
      "year":"2012",
      "director":"Ang Lee",
      "synopsis":"A young man who survives a disaster at sea is hurtled into an epic journey of adventure and discovery. While cast away, he forms an unexpected connection with another survivor: a fearsome Bengal tiger."
    });
  });
});

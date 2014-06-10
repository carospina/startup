require.config ({
  paths: {
    jquery: 'jquery-1.11.1.min'
  }
});

requirejs(['Director.js', 'Movie.js', 'jquery'], function(Director, Movie, $){
  var jamesCameron = new Director('James Cameron');
  jamesCameron.addQuote(['I am hopeful that we will be able to study the ocean before we destroy it.',
                         'Curiosity is the most powerful thing you own.',
                         'People call me a perfectionist, but I am not. I am a rightist. I do something until it is right, and then I move on to the next thing.',
                         'I love short trips to New York, to me it is the finest three-day town on earth.']);
  var avatar = new Movie();
  avatar.set('director',jamesCameron);
  console.log(avatar.get('director').speak());
  $(document).ready(function() {
    $('.buttonQuote').click(function() {
      $('.quotes').html(avatar.get('director').speak()).fadeIn(400);
    })
  })
});

$(document).ready(function() {
  $('section.hidden').fadeIn(400, function() {
    $('input.alias').focus();
  });
  $('button').click(function() {
    var name = $('input.alias').val();
    $.get('http://bootcamp.aws.af.cm/welcome/'+name, function(data) {
      $('.response')
        .html(highlight(name,data.response));
    })
      .fail(function(data) {
        $('.response')
          .addClass("error")
          .text('ERROR');
      });
  });
  getTweets();
});

function highlight(name,data) {
  var nameHigh = '<span style="background-color: #FFFF00">'+name+'</span>';
  return data.replace(name,nameHigh);
}

function getTweets() {
  $.getJSON('http://tweetproxy.ap01.aws.af.cm/search?callback=?',{q: "html5"}, function(data) {
    console.log(data);
    $.each(data.statuses,function(i,tweet) {
      var username = tweet.user.name,
          text = tweet.text,
          created = tweet.created_at,
          image = tweet.user.profile_image_url;
      var art_tweet = '<article class="tweet">'
                    + '<header> <img src="'+image+'">'+username+'</header>'
                    + '<p>'+text+'</p>'
                    + '<footer>'+created+'</footer>'
                    + '</article>';
      $('section.tweets').append(art_tweet);

    })
  })
}

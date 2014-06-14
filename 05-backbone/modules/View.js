define(['backbone'], function(Backbone) {
  var View = Backbone.View.extend ({
    el: $("#moviesapp"),
    events: {
      "click .bnewmovie": "newMovie",
    },

    initialize:function(listMovie,movieView) {
      this.list = listMovie;
      this.movieview = movieView;
      this.listenTo(this.list, 'add', this.addOne);
      this.listenTo(this.list, 'reset', this.addAll);
      this.newtitle = this.$('#newtitle');
      this.newyear = this.$('#newyear');
      this.newdirector = this.$('#newdirector');
      this.newsynopsis = this.$('#newsynopsis');
      this.list.fetch();
    },

    newMovie:function() {   
      if (!this.newtitle.val() || !this.newyear.val() || !this.newdirector.val() || !this.newsynopsis.val()) 
        return;
      else {
        this.list.create({title: this.newtitle.val(), year: this.newyear.val(), director: this.newdirector.val(), synopsis: this.newsynopsis.val()});
        this.newtitle.val('');
        this.newyear.val('');
        this.newdirector.val('');
        this.newsynopsis.val('');
      }
    },

    addOne:function(movie){
      var view = new this.movieview({model: movie});
      this.$el.append(view.render().el);
    },

    addAll:function(){
      this.list.each(this.addOne,this);
    }
  });
  return View;
});

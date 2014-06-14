define(['backbone','modules/ListMovie'], function(Backbone,ListMovie) {
  var MovieView = Backbone.View.extend({
    
    tagName: 'article',
    template: _.template($('#moviedata').html()),

    events: {
      "click button.remove": "clear",
      "dblclick .info": "edit",
      "click .save": "updateOnClick",
    },

    initialize:function() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      this.ititle = this.$('#ititle');
      this.iyear = this.$('#iyear');
      this.idirector = this.$('#idirector');
      this.isynopsis = this.$('#isynopsis');
      return this;
    },

    clear: function() {
      this.model.destroy();
    },

    edit: function() {
      this.$el.addClass("editing");
    },

    updateOnClick: function() {
      var newtitle = this.ititle.val();
      var newyear = this.iyear.val();
      var newdirector = this.idirector.val();
      var newsynopsis = this.isynopsis.val();
      if (!newtitle && !newyear && !newdirector && !newsynopsis)
        this.clear();
      else {
        this.model.save({title: newtitle, year: newyear, director: newdirector, synopsis: newsynopsis});
        this.$el.removeClass("editing");
      }
    }
  });
  return MovieView;
});  

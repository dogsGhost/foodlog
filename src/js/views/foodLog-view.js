(function ($) {
  'use strict';

  // Top-level view for our app.

  fl.foodLogView = Backbone.View.extend({

    initialize: function () {
      // Bind events.
      fl.date = new Date();
      this.listenTo(fl.week, 'reset', this.addAll);

      // Retrieve stored data.
      fl.week.fetch({reset: true});
    },

    addOne: function (day) {
      // Add one item to the day list.
      var view = new fl.DayView({
        model: day 
      });
      view.render();  
    },

    addAll: function (day) {
      // Create an html list from a whole collection.
      fl.week.each(this.addOne, this);
    }

  });
  
})(jQuery);
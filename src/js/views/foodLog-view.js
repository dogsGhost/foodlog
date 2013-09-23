(function ($) {
  'use strict';

  fl.foodLogView = Backbone.View.extend({

    initialize: function () {
      // Bind events.

      // Retrieve stored data.
      fl.week.fetch();
    },

    addOne: function (food) {
      // Add one item to the food list.
      var view = new fl.FoodItemView({
        model: food 
      });
      view.render();  
    },

    addAll: function (food) {
      // Create an html list from a whole collection.
      fl.foodCollection.each(this.addOne, this);
    }

  });
  
})(jQuery);
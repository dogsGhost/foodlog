(function ($) {
  'use strict';

  fl.foodLogView = Backbone.View.extend({

    initialize: function () {
      // Bind events.
      this.listenTo(fl.foodCollection, 'add', this.addOne);
      this.listenTo(fl.foodCollection, 'reset', this.addAll);

      // Retrieve stored data.
      fl.foodCollection.fetch();
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
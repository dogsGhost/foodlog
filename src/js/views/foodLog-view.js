var foodLog = foodLog || {};

(function ($) {
  'use strict';

  foodLog.foodLogView = Backbone.View.extend({

    initialize: function () {
      this.listenTo(foodLog.foodList, 'add', this.addOne);
    },

    addOne: function (food) {
      var view = new foodLog.FoodItemView({
        model: new foodLog.FoodItem(food) 
      });
      view.render();
    }

  });

})(jQuery);
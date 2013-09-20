var foodLog = foodLog || {};

(function () {
  'use strict';

  // Food List Collection
  // A collection of Food Items

  var FoodList = Backbone.Collection.extend({
    model: foodLog.foodItem

  });

  // Create global collection of food items.
  foodLog.foodList = new FoodList();
})();
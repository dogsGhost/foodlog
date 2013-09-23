var fl = fl || {};

(function () {
  'use strict';

  // Food List Collection
  // A collection of Food Items
  var FoodCollection = Backbone.Collection.extend({
    model: fl.FoodItem,

    url: 'js/food.json'

  });

  // Create global collection of food items.
  fl.foodCollection = new FoodCollection();
})();
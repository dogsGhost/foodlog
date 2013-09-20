var foodLog = foodLog || {};

(function () {
  'use strict';

  // Food Item Model
  // Represents one entry in a possible list on entries on one day.

  foodLog.FoodItem = Backbone.Model.extend({
    defaults: {
      title: ''
    }
  });

})();
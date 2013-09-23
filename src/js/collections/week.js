var fl = fl || {};

(function () {
  'use strict';

  // Food List Collection
  // A collection of Food Items
  var Week = Backbone.Collection.extend({
    model: fl.Day,

    url: 'js/sample-data.json'

  });

  // Create global collection of food items.
  fl.week = new Week();
})();
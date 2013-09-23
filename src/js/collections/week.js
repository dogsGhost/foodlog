var fl = fl || {};

(function () {
  'use strict';

  // Week Collection
  // A collection of Day Models
  var Week = Backbone.Collection.extend({
    model: fl.Day,

    url: 'js/sample-data.json'

  });

  // Create global collection of food items.
  fl.week = new Week();
})();
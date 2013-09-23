var fl = fl || {};

(function () {
  'use strict';

  // Food Item Model
  // Represents one entry in a possible list on entries on one day.

  fl.FoodItem = Backbone.Model.extend({

  });

  // TEMP METHOD - supress attempts to sync with a server.
  // Backbone.sync = function (method, model, options) {
  //   if (method === 'read') {
  //     console.log(options);
  //   }
  // };  
})();
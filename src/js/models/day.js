var fl = fl || {};

(function () {
  'use strict';

  fl.Day = Backbone.RelationalModel.extend({
    // url: 'js/sample-data.json',

    idAttribute: 'entry_id',

    relations: [{
      type: Backbone.HasMany,

      key: 'entries',
      
      relatedModel: 'fl.FoodItem',
      
      reverseRelation: {
        key: 'day',
        includeInJSON: 'entry_id'
      }
    }]

  });


})();
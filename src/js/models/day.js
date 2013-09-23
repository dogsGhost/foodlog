var fl = fl || {};

(function () {
  'use strict';

  fl.Day = Backbone.RelationalModel.extend({
    // url: 'js/sample-data.json',

    makeDate: function () {
      var d = new Date(this.get('date'));
      b = d.getDate() + 1;
      d.setDate(b);
      return new Date(d).toDateString();
    },

    dateString: this.makeDate(),

    idAttribute: 'entry_id',

    relations: [{
      type: Backbone.hasMany,

      key: 'entries',
      
      relatedModel: 'fl.FoodItem',
      
      reverseRelation: {
        key: 'day',
        includeInJSON: 'entry_id'
      }
    }]

  });


})();
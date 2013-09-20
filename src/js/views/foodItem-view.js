var foodLog = foodLog || {};

(function () {
  'use strict';

  foodLog.FoodItemView = Backbone.View.extend({

    tagName: 'li',

    template: _.template( $('#foodItem-template').html() ),

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
      this.render();
    },

    render: function () {
      this.$el.html( this.template( this.model.toJSON() ) );
      $('#week').append(this.el);
    }
  });

})();
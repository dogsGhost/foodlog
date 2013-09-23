(function () {
  'use strict';

  fl.FoodItemView = Backbone.View.extend({

    template: _.template( $('#foodItem-template').html() ),

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
      this.render();
    },

    render: function () {
      this.$el.html( this.template( this.model.toJSON() ) );
      $('#week').append(this.el);
      return this;
    },

    edit: function () {

    },

    updateOnEnter: function (e) {
      e.preventDefault();

    },

    close: function () {

    }
  });

})();
(function () {
  'use strict';

  fl.FoodItemView = Backbone.View.extend({

    tagName: 'li',

    id: function () {
      return this.model.cid;
    },

    template: _.template( $('#foodItem-template').html() ),

    initialize: function () {
      _.bindAll(this, 'render');
      this.listenTo(this.model, 'change', this.render);
    },

    events: {
      'dblclick label': 'edit',
      'keypress .edit': 'updateOnEnter',
      'blur .edit':   'close'
    },    

    render: function () {
      return this.$el.html( this.template( this.model.toJSON() ) );
      // $('#week').append(this.el);
      // return this;
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
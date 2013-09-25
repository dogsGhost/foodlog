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
      this.listenTo(this.model, 'destroy', this.remove);
    },

    events: {
      'dblclick label': 'edit',
      'keypress .edit': 'detectEnter',
      'blur .edit':   'exitEdit',
      'click button.destroy': 'deleteItem'
    },    

    render: function () {
      var html = this.$el.html(this.template(this.model.toJSON()));
      this.$input = this.$('.edit');
      return html;
    },

    edit: function () {
      // Set item to edit mode.
      this.$el.addClass('editing');
      this.$input.focus();
    },

    detectEnter: function (e) {
      // Update item when enter is pressed.
      if (e.which === ENTER_KEY) {
        this.exitEdit();
      }
    },

    exitEdit: function () {
      // Update item and exit editor when the input loses focus or enter key is pressed.
      var newVal = this.$input.val();
      var origVal = this.model.get('title').trim();
      console.log(newVal);
      // Set the input value to the new value.
      this.$input.val(origVal);


      // If a new value was set and its not the same as the old value update the model.
      if (newVal && newVal !== origVal) {
        console.log('change');
        this.model.set({ title: newVal });
      }

      this.$el.removeClass('editing');
    },

    deleteItem: function () {
      this.model.destroy();
    }
  });

})();
(function () {
  'use strict';


  // View for one day and its associated information.
  // For binding interactions to food items associated with this day, see foodItem-view.js

  fl.DayView = Backbone.View.extend({

    template: _.template( $('#day-template').html() ),

    initialize: function () {
      _.bindAll(this, 'render', 'renderEntry');
      // this.model.bind('reset', this.render);
      // this.model.bind('add:entries', this.renderEntry); 
    },

    renderEntry: function (entry) {
      var entryView = new fl.FoodItemView({ model: entry });
      this.$('ul.entries').append(entryView.render());
    },

    setDateString: function () {
      var d = new Date(this.model.get('date'));
      var b = d.getDate() + 1;
      d.setDate(b);
      b = new Date(d).toDateString();
      this.model.set('dateString', b);
    },

    className: function () {
      this.setDateString();
      var string = 'day';

      if (fl.date.toDateString() === this.model.get('dateString')) {
        string += ' current';
      }

      return string;
    },

    setIcon: function () {
      if (this.$el.hasClass('current')) {
        this.$('h2 i').addClass('icon-minus');
      } else {
        this.$('h2 i').addClass('icon-plus');
      }
    },

    render: function () {
      this.$el.html( this.template( this.model.toJSON() ) );
      this.model.get('entries').forEach(this.renderEntry);
      this.setIcon();
      $('#week').append(this.el);
    }
  });

})();
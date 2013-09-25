(function () {
  'use strict';


  // View for one day and its associated information.
  // For binding interactions to food items associated with this day, see foodItem-view.js

  fl.DayView = Backbone.View.extend({

    template: _.template( $('#day-template').html() ),

    initialize: function () {
      // Maintain reference to this in render functions.
      _.bindAll(this, 'render', 'renderEntry');
      // Watch for new entries and immediately add them to the page.
      this.model.bind('add:entries', this.renderEntry);
    },

    events : {
      'click h2': 'toggleContents',
      'keypress input.add-new': 'createOnEnter'
    },

    toggleContents: function () {
      // Hide or show content.
      this.$('.inner-wrap').slideToggle();
      // Set appropriate classes.
      this.$el.toggleClass('current');
      this.$icon.toggleClass('icon-plus icon-minus icon-white');
    },

    createOnEnter: function (e) {
      var string = this.$input.val().trim();

      // Listen for enter key to be pressed.
      if (e.which === ENTER_KEY && string) {
        // If enter key is pressed we add a new item to our collection.
        this.$input.val('');
        return this.model.get('entries').create({ title: string });
      }

      return;
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

    setIcons: function () {
      if (this.$el.hasClass('current')) {
        this.$icon.addClass('icon-minus icon-white');
      } else {
        this.$icon.addClass('icon-plus');
      }
    },

    render: function () {
      this.$el.html( this.template( this.model.toJSON() ) );
      this.$input = this.$('input.add-new');
      this.$icon = this.$('h2').find('i');      
      this.setIcons();
      this.model.get('entries').forEach(this.renderEntry);

      if (this.$el.hasClass('current')) {
        this.$('.inner-wrap').css('display', 'block');
      }

      $('#week').append(this.el);
    }
  });

})();
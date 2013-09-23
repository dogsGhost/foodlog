var fl = fl || {};

(function () {
  'use strict';

  fl.Day = Backbone.Model.extend({
    initialize: function () {
      this.entries = new foodCollection();
    }
  });


})();
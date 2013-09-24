var fl = fl || {};

(function () {
  'use strict';

  // Week Collection
  // A collection of Day Models
  var Week = Backbone.Collection.extend({
    model: fl.Day,

    url: 'js/sample-data.json',

    parse: function (resp) {
      // Set values based on current date.
      var curDay = fl.date.getDay();
      var curDate = fl.date.getDate();
      var d, i, j, len;
      
      // Store dates.
      var dates = [];
      
      // Store data we send to client.
      var response = [];

      // Get dats for all days of week after and including current day.
      // Don't include 7 because getDay is zero-based.
      for (i = curDay; i < 7; i += 1) {
        
        // Create date object.
        d = new Date();
        d = d.setDate(curDate);

        // Convert to string.
        d = new Date(d).toISOString().split('T')[0];
        
        // Add to arrray.
        dates.push(d);
        
        // increment curDate for next run of loop.
        curDate += 1;
      }

      // Reset some variables.
      i = curDay;
      curDate = fl.date.getDate();

      // Do the same for days of the week that come before current day.
      while (i--) {
        // Decrease curDate first since we already added the current day.
        curDate -= 1;
        d = new Date();
        d = d.setDate(curDate);
        d = new Date(d).toISOString().split('T')[0];
        dates.push(d);
      }

      // Sort the dates.
      dates.sort(function (a, b) {
        if (a === b) {
          return 0;
        }

        return a < b ? -1 : 1;
      });

      for (i = 0; i < 7; i += 1) {
        for (j = 0, len = resp.length; j < len; j += 1) {
          if (dates[i] === resp[j].date) {
            response.push(resp[j]);
          }
        }
      }

      return response;
    }

  });

  // Create global collection of food items.
  fl.week = new Week();
})();
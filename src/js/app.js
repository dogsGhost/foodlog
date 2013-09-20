'use strict';
var foodLog = foodLog || {};

//$(function () {


var b = new foodLog.foodLogView();

//
var foodItem = {
  title: 'cheeseburger, fries, and a milkshake'
};

var foodItemView = new foodLog.FoodItemView({
  model: new foodLog.FoodItem(foodItem)
});

//

//});
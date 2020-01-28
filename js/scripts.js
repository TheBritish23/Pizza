// Business logic for Customer
function Menu() {
  this.food = []
  this.currentId = 0;
}

// Business logic for Menu
function Pizza(pizzaType, toppingT, crustType) {
  this.pizzaType = pizzaType
  this.toppingT = toppingT
  this.crustType = crustType
}

Pizza.prototype.fullCourse = function() {
  return this.pizzaType + " " + this.crustType;
}

// User Interface Logic
$(document).ready(function(){
  $("form#cheese").click(function(){
    $("#current-box").append(" ");
  });

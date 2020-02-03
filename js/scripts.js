// Business logic for Customer
function Menu() {
  this.food = []
  this.choice = []
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
  var myPizza = new Pizza();
  $("form#cheese").submit(function(event) {
    event.preventDefault();

    $("#btn-sizeChoice").click(function(event){
      event.preventDefault();
      myPizza.choice();
      $("#pizza").text(player.pizza);
      var myPizza = document.getElementById("choice").value;
    });

    $("#btn-topChoice").click(function(event){
      event.preventDefault();
      myPizza.top();
      $("#tops").text(player.tops);
      var myPizza = document.getElementById("top").value;
    });

    $("#btn-crustChoice").click(function(event){
      event.preventDefault();
      myPizza.dough();
      $("#crust").text(player.crust);
      var myPizza = document.getElementById("crust").value;
    });

      $("#output").text(output);
    });
  });

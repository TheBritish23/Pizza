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
    });

    $("#btn-topChoice").click(function(event){
      event.preventDefault();
      myPizza.top();
      $("#tops").text(player.tops);
    });

    $("#btn-crustChoice").click(function(event){
      event.preventDefault();
      myPizza.dough();
      $("#crust").text(player.crust);
    });

      $("#output").text(output);
      var myPizza = document.getElementById("Pizza").value;
    });
  });

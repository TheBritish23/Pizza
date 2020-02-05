// Business logic for Customer
function Menu() {
  this.food = []
  this.choice = []
}

// Business logic for Menu
function Pizza(pizzaSize, toppingT, crustType) {
  this.pizzaSize = pizzaSize
  this.toppingT = toppingT
  this.crustType = crustType
}

Pizza.prototype.fullCourse = function() {
  return this.pizzaType + " " + this.crustType;
}

// User Interface Logic
$(document).ready(function(){
  var myPizza = new Pizza();
  // $("form#cheese").submit(function(event) {
  //   event.preventDefault();

    $("button.size").click(function() {
      // myPizza.choice();
      // $("#pizza").text(player.pizza);
      var small = $("button#s").val();
      // myPizza.pizzaSize = document.getElementByClassName("size").value;
      console.log(myPizza(small))
    });

    $("#topChoice").click(function(event){
      event.preventDefault();
      myPizza.top();
      $("#tops").text(player.tops);
      myPizza.toppingT = document.getElementByClass("topping").value;
      console.log(myPizza.toppingT)
    });

    $("#crustChoice").click(function(event){
      event.preventDefault();
      myPizza.dough();
      $("#crust").text(player.crust);
      myPizza.crustType = document.getElementById("crusty").value;
      console.log(myPizza.crustType)
    });

      // $("#output").text(output);
    });
  // });

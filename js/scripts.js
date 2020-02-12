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
  return this.pizzaSize + " " + this.crustType;
}

Pizza.prototype.fullCourse = function() {
  console.log(this.customer);
  return parseInt(this.customer) * 13.35;
}

// User Interface Logic
var size1 = "";
var topping = "";
var crust = "";
$(document).ready(function(){

    $("button.size").click(function(event) {
      event.preventDefault();
      size1 = $(event.target).attr("value");
      console.log(size1);
    });

    $("button.topping").click(function(event){
      event.preventDefault();
      topping = $(event.target).attr("value");
      console.log(topping);
    });

    $("button.crust").click(function(event){
      event.preventDefault();
      crust = $(event.target).attr("value")
      console.log(crust);
    });

    var myPizza = new Pizza(size1, topping, crust);
    $("button#pay").click(function(event){
    event.preventDefault();
    console.log(myPizza);
  });
     $("#output").text("trump sucks balls!!!");
    });
  // });

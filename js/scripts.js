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

// User Interface Logic
$(document).ready(function(){
  var price = 0;
  var size1 = "";
  var topping = "";
  var crust = "";
    $("button.size").click(function(event) {
      event.preventDefault();
      size1 = $(event.target).attr("value");
      if (size1=="small") {
        price += 6.99;
      }
      else if (size1=="medium") {
        price += 10.99;
      }
      else if (size1=="large") {
        price += 17.35;
      }
      else if (size1=="xlarge") {
        price += 21.45
      }

      console.log(size1);
    });

    $("button.topping").click(function(event){
      event.preventDefault();
      topping = $(event.target).attr("value");
      if (topping=="cheese") {
        price += 2.15;
      }
      else if (topping=="pepperoni") {
        price += 2.15;
      }
      else if (topping=="anchovies") {
        price += 2.15;
      }
      else if (topping=="veggies") {
        price += 2.15;
      }
      console.log(topping);
    });

    $("button.crust").click(function(event){
      event.preventDefault();
      crust = $(event.target).attr("value")
      if (crust=="thin crust") {
        price += 3.15;
      }
      else if (crust=="thick crust") {
        price += 3.25;
      }
      console.log(crust);
    });

    $("button#pay").click(function(event){
      event.preventDefault();
    var myPizza = new Pizza(size1, topping, crust);
    $("#output").append(size1 + " " + topping + " " + crust + " = $" + price.toFixed(2));
    console.log(myPizza);
  });
 });

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
  console.log(this.food);
  return parseInt(this.food) * 13.35;
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

    $("button#pay").click(function(event){
      event.preventDefault();
    var myPizza = new Pizza(size1, topping, crust);
    $("#output").append(size1 + " " + topping + " " + crust);
    var price = 0;
    if (myPizza.size1=="small") {
      price += 6.99;
    }
    else if (myPizza.size1=="medium") {
      price += 10.99;
    }
    else if (myPizza.size1=="large") {
      price += 17.35;
    }
    else if (myPizza.size1=="xlarge") {
      price += 21.45
    }

    if (myPizza.topping=="cheese") {
      price += 2.15;
    }
    else if (myPizza.topping=="pepperoni") {
      price += 2.15;
    }
    else if (myPizza.topping=="anchovies") {
      price += 2.15;
    }
    else if (myPizza.topping=="veggies") {
      price += 2.15;
    }

    if (myPizza.crust=="thin crust") {
      price += 3.15;
    }
    else if (myPizza.crust=="thick crust") {
      price += 3.15;
    }
    console.log(price);
    $("#output").append(price);
    console.log(myPizza);
  });
    });

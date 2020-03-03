
// Business logic for Menu
function Pizza(pizzaSize, toppingT, crustType) {
  this.pizzaSize = pizzaSize;
  this.toppingT = toppingT;
  this.crustType = crustType;
  this.pricePrice = 0;
  this.sizePrice = 0;
  this.toppingPrice = 0;
  this.crustPrice = 0;
}

Pizza.prototype.price = function() {
  return this.pricePrice;
};

Pizza.prototype.size1 = function() {
  return this.pizzaSize;
}

Pizza.prototype.topping = function() {
  return this.toppingT;
}

Pizza.prototype.crust = function() {
  return this.crustType;
}

// User Interface Logic
$(document).ready(function(){
  var price = 0;
  var size1 = "";
  var topping = "";
  var crust = "";
  myPizza = new Pizza(null, null, null);
    $("button.size").click(function(event) {
      event.preventDefault();
      $("button.size").removeClass("background-color-select");
       $(this).toggleClass("background-color-select");
       console.log(myPizza);
       var currentSizePrice = 0;

      size1 = $(event.target).attr("value");
      if (size1=="small") {
        currentSizePrice = 6.99;
      }

      else if (size1=="medium") {
        currentSizePrice = 10.99;
      }

      else if (size1=="large") {
        currentSizePrice = 17.35;
      }

      else if (size1=="xlarge") {
        currentSizePrice = 21.45
      }

      myPizza.sizePrice = currentSizePrice;
      console.log(myPizza.sizePrice);
    });

    $("button.topping").click(function(event){
       event.preventDefault();
       $("button.topping").removeClass("background-color-select");
         $(this).toggleClass("background-color-select");
      topping = $(event.target).attr("value");
      console.log(myPizza);
      var currentToppingPrice = 0;

      if (topping=="cheese") {
        currentToppingPrice = 2.15;
      }

      else if (topping=="pepperoni") {
        currentToppingPrice = 2.15;
      }

      else if (topping=="anchovies") {
        currentToppingPrice = 2.15;
      }

      else if (topping=="veggies") {
        currentToppingPrice = 2.15;
      }

      myPizza.toppingPrice = currentToppingPrice;
      console.log(myPizza.toppingPrice);
    });

    $("button.crust").click(function(event){
      event.preventDefault();
      $("button.crust").removeClass("background-color-select");
        $(this).toggleClass("background-color-select");
      crust = $(event.target).attr("value")
      console.log(myPizza);
      var currentCrustPrice = 0;

      if (crust=="thin crust") {
        currentCrustPrice = 3.15;
      }

      else if (crust=="thick crust") {
        currentCrustPrice = 3.25;
      }

      myPizza.crustPrice = currentCrustPrice;
      console.log(myPizza.crustPrice);
    });

    $("button#pay").click(function(event){
      event.preventDefault();
    //$("#output").empty().append(size1 + " " + topping + " " + crust + " = $" + price.toFixed(2));
    $("#output").empty().append(size1 + " " + topping + " " + crust + " = $" + price.toFixed(2));
    console.log(price);
  });
 });


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
    $("button.size").click(function(event) {
      event.preventDefault();
      $("button.size").removeClass("background-color-select");
       $(this).toggleClass("background-color-select");
       myPizza = (null, null, null);
       console.log(myPizza);

      size1 = $(event.target).attr("value");
      if (size1=="small") {
        price += 6.99;
      }
      currentsizePrice = 0;

      else if (size1=="medium") {
        price += 10.99;
      }
      currentsizePrice = 0;

      else if (size1=="large") {
        price += 17.35;
      }
      currentsizePrice = 0;

      else if (size1=="xlarge") {
        price += 21.45
      }
      currentsizePrice = 0;

      console.log(size1);
    });

    $("button.topping").click(function(event){
       event.preventDefault();
       $("button.topping").removeClass("background-color-select");
         $(this).toggleClass("background-color-select");
      topping = $(event.target).attr("value");
      if (topping=="cheese") {
        price += 2.15;
      }
      currenttoppingPrice = 0;

      else if (topping=="pepperoni") {
        price += 2.15;
      }
      currenttoppingPrice = 0;

      else if (topping=="anchovies") {
        price += 2.15;
      }
      currenttoppingPrice = 0;

      else if (topping=="veggies") {
        price += 2.15;
      }
      currenttoppingPrice = 0;

      console.log(topping);
    });

    $("button.crust").click(function(event){
      event.preventDefault();
      $("button.crust").removeClass("background-color-select");
        $(this).toggleClass("background-color-select");
      crust = $(event.target).attr("value")
      if (crust=="thin crust") {
        price += 3.15;
      }
      currentcrustPrice = 0;

      else if (crust=="thick crust") {
        price += 3.25;
      }
      currentcrustPrice = 0;
      
      console.log(crust);
    });

    $("button#pay").click(function(event){
      event.preventDefault();
    //$("#output").empty().append(size1 + " " + topping + " " + crust + " = $" + price.toFixed(2));
    $("#output").empty().append(size1 + " " + topping + " " + crust + " = $" + price.toFixed(2));
    console.log(price);
  });
 });

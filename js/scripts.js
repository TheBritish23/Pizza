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

// User Interface Logic
$(document).ready(function(){
  var myPizza = new Pizza();
  // $("form#cheese").submit(function(event) {
  //   event.preventDefault();

    $("button.size").click(function() {
      var size = $("button.size").val("small");
      // $("#pizza").text(player.pizza);
      // var small = $("button#s").val();
      // var medium = $("button#m").val();
      // var large = $("button#l").val();
      // var xlarge = $("button#xl").val();
      // myPizza.pizzaSize = document.getElementByClassName("size").value;
      console.log(size);
    });

    $("button.topping").click(function(){
      // myPizza.top();
      // $("#tops").text(player.tops);
      myPizza.toppingT = document.getElementByClass("topping").value;
      console.log(topping);
    });

    $("button.crust").click(function(){
      myPizza.dough();
      $("#crust").text(player.crust);
      myPizza.crustType = document.getElementById("crusty").value;
      console.log(crust);
    });

      // $("#output").text(output);
    });
  // });

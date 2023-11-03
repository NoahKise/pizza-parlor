// Business Logic

function Pizza(size, sauce, cheese, veggieToppings, proteinToppings) {
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.veggieToppings = veggieToppings;
  this.proteinToppings = proteinToppings;
}

Pizza.prototype.costCalculate = function () {
  let pizzaCost = 0;
  if (this.size === "large") {
    pizzaCost += 20;
  } else if (this.size === "giant") {
    pizzaCost += 35;
  }
  if (this.size === "large") {
    pizzaCost += this.veggieToppings.length * 2;
    pizzaCost += this.proteinToppings.length * 3;
  } else if (this.size === "giant") {
    pizzaCost += this.veggieToppings.length * 3;
    pizzaCost += this.proteinToppings.length * 5;
  }
  return pizzaCost;
};

// UI Logic

function formHandler(event) {
  event.preventDefault();
  document.getElementById("cart").removeAttribute("class");
  const inputSize = document.querySelector("select#size").value;
  const inputSauce = document.querySelector("select#sauce").value;
  const inputCheese = document.querySelector("select#cheese").value;
  let inputVeggieToppings = [];
  let possibleVeggieToppings = document.getElementsByName("vegTop");
  for (let i = 0; i < possibleVeggieToppings.length; i++) {
    if (possibleVeggieToppings[i].checked) {
      inputVeggieToppings.push(possibleVeggieToppings[i].value);
    }
  }
  let inputProteinToppings = [];
  let possibleProteinToppings = document.getElementsByName("proTop");
  for (let i = 0; i < possibleProteinToppings.length; i++) {
    if (possibleProteinToppings[i].checked) {
      inputProteinToppings.push(possibleProteinToppings[i].value);
    }
  }
  const inputName = document.querySelector("input#pizzaName").value;
  let pizzaOrder = new Pizza(inputSize, inputSauce, inputCheese, inputVeggieToppings, inputProteinToppings)
  let pizzaOrderCost = pizzaOrder.costCalculate();
  let cartItem = {
    orderedPizza: pizzaOrder,
    orderedPizzaCost: pizzaOrderCost,
    orderedPizzaName: inputName,
  }
  console.log(cartItem.orderedPizzaName);
  const name = document.createElement("h1");
  name.append('"' + cartItem.orderedPizzaName + '"');
  const pizzaSize = document.createElement("p");
  pizzaSize.append("Size: " + cartItem.orderedPizza.size);
  const pizzaSauce = document.createElement("p");
  pizzaSauce.append("Sauce: " + cartItem.orderedPizza.sauce);
  const pizzaCheese = document.createElement("p");
  pizzaCheese.append("Cheese: " + cartItem.orderedPizza.cheese);
  const pizzaVegTops = document.createElement("p");
  pizzaVegTops.append("Veggie Toppings: " + cartItem.orderedPizza.veggieToppings);
  const pizzaProTops = document.createElement("p");
  pizzaProTops.append("Protein Toppings: " + cartItem.orderedPizza.proteinToppings);

  const body = document.querySelector("body");
  body.append(name, pizzaSize, pizzaSauce, pizzaCheese, pizzaVegTops, pizzaProTops);

  return cartItem;
}



window.addEventListener("load", function () {
  document.querySelector("form#pizzaBuilder").addEventListener("submit", formHandler);
});
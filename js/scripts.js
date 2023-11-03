// Business Logic

function Pizza(size, sauce, cheese, veggieToppings, meatToppings) {
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.veggieToppings = veggieToppings;
  this.meatToppings = meatToppings;
}

Pizza.prototype.costCalculate = function () {
  let pizzaCost = 0;
  if (this.size === "large") {
    pizzaCost += 20;
  } else if (this.size === "giant") {
    pizzaCost += 35;
  }
  pizzaCost += this.veggieToppings.length * 2;
  pizzaCost += this.meatToppings.length * 3;
  return pizzaCost;
};

// UI Logic

function formHandler(event) {
  event.preventDefault();
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
  let pizzaOrder = new Pizza(inputSize, inputSauce, inputCheese, inputVeggieToppings, inputProteinToppings)
  let pizzaOrderCost = pizzaOrder.costCalculate();
  let cartItem = {
    orderedPizza: pizzaOrder,
    orderedPizzaCost: pizzaOrderCost,
  }
  console.log(cartItem);
  return cartItem;
}



window.addEventListener("load", function () {
  document.querySelector("form#pizzaBuilder").addEventListener("submit", formHandler);
});
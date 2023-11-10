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
  if (this.sauce === "pesto") {
    pizzaCost += 2;
  }
  return pizzaCost;
};

function Cart() {
  this.totalCost = 0
}

Cart.prototype.addToCart = function (itemCost) {
  this.totalCost += itemCost;
};


// UI Logic

function formatChoices(choice) {
  return choice.charAt(0).toUpperCase() + choice.slice(1);
}

function formatToppings(toppings) {
  for (let i = 0; i < toppings.length; i++) {
    let words = toppings[i].split('-');
    for (let j = 0; j < words.length; j++) {
      words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1);
    }
    toppings[i] = words.join(' ');
  }
  return toppings;
}

let totalCartCost = 0;

function formHandler(event) {
  event.preventDefault();
  document.getElementById("cart").removeAttribute("class");
  document.getElementById("total").removeAttribute("class");
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
  let pizzaOrder = new Pizza(inputSize, inputSauce, inputCheese, inputVeggieToppings, inputProteinToppings);
  let pizzaOrderCost = pizzaOrder.costCalculate();
  let cartItem = {
    orderedPizza: pizzaOrder,
    orderedPizzaCost: pizzaOrderCost,
    orderedPizzaName: inputName,
  }
  totalCartCost += (cartItem.orderedPizzaCost);
  document.getElementById("totalCost").innerText = "Total: $" + totalCartCost;

  const formattedSize = formatChoices(cartItem.orderedPizza.size);
  const formattedSauce = formatChoices(cartItem.orderedPizza.sauce);
  const formattedCheese = formatChoices(cartItem.orderedPizza.cheese);
  const formattedVeggieToppings = formatToppings(cartItem.orderedPizza.veggieToppings);
  const formattedProteinToppings = formatToppings(cartItem.orderedPizza.proteinToppings);

  const name = document.createElement("h1");
  name.append('"' + cartItem.orderedPizzaName + '"');
  const pizzaSize = document.createElement("p");
  pizzaSize.append("Size: " + formattedSize);
  const pizzaSauce = document.createElement("p");
  pizzaSauce.append("Sauce: " + formattedSauce);
  const pizzaCheese = document.createElement("p");
  pizzaCheese.append("Cheese: " + formattedCheese);
  const pizzaVegTops = document.createElement("p");
  pizzaVegTops.append("Veggie Toppings: " + formattedVeggieToppings.join(', '));
  const pizzaProTops = document.createElement("p");
  pizzaProTops.append("Protein Toppings: " + formattedProteinToppings.join(', '));
  const price = document.createElement("h2");
  price.append("$" + cartItem.orderedPizzaCost);

  const cartDiv = document.querySelector("div#cart");
  cartDiv.append(name, pizzaSize, pizzaSauce, pizzaCheese, pizzaVegTops, pizzaProTops, price);

  window.scrollTo({
    top: 1200,
    behavior: "smooth",
  });

  document.getElementById("pizzaBuilder").reset();
}

function placeOrder(event) {
  event.preventDefault();
  document.getElementById("workingOnIt").removeAttribute("class");
  window.scrollTo({
    top: 100000,
    behavior: "smooth",
  });
}

window.addEventListener("load", function () {
  document.querySelector("form#pizzaBuilder").addEventListener("submit", formHandler);
  document.querySelector("form#order").addEventListener("submit", placeOrder);
});
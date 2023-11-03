function Pizza(size, sauce, cheese, veggieToppings, meatToppings) {
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.veggieToppings = veggieToppings;
  this.meatToppings = meatToppings;
}

Pizza.prototype.costCalculate = function() {
  let pizzaCost = 0;
  if (this.size === "large") {
    pizzaCost += 20;
    return pizzaCost;
  } else if (this.size === "giant") {
    pizzaCost += 35;
    return pizzaCost;
  }
  return pizzaCost;
};
# Pizza Parlor Test Driven Development

#### Describe Pizza()

Test: It should return a pizza object with two properties for toppings and size.
Code: const myPizza = new Pizza("large", ["sausage", "mushrooms", "olives"]);
Expected Output: Pizza { size: "large", toppings: ["sausage", "mushrooms", "olives"] }

Test: It should return a pizza object with five properties for size, sauce, cheese, veggie toppings, and meat toppings.
Code: const myPizza = new Pizza("large", "red", "mozzarellla", ["mushrooms", "olives"], ["sausage"]);
Expected Output: Pizza { size: "large", sauce: "red", cheese: "mozzarella", veggieToppings: ["mushrooms, "olives"], meatToppings: ["sausage"]}

#### Describe Pizza.prototype.costCalculate

Test: It should check the size of the pizza and based on the size add the cost of that size to a new variable called pizzaCost, then return pizzaCost.
Code: myPizza.costCalculate();
Expected Output: 20

Test: It should check the number of veggie toppings on the pizza and add to the cost based on how many are present.
Code: myPizza.costCalculate();
Expected Output: 24

Test: It should check the number of meat toppings on the pizza and add to the cost based on how many are present.
Code: myPizza.costCalculate;
Expected Output: 30;

Test: It should charge more per topping if the pizza size is giant.
Code: myPizza.costCalculate(); (assuming giant pizza with 1 veggie topping and 1 meat topping)
Expected Output: 43
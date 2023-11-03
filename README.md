# Pizza Parlor Test Driven Development

#### Describe Pizza()

Test: It should return a pizza object with two properties for toppings and size.
Code: const myPizza = new Pizza("large", ["sausage", "mushrooms", "olives"]);
Expected Output: Pizza { size: "large", toppings: ["sausage", "mushrooms", "olives"] }

Test: It should return a pizza object with five properties for size, sauce, cheese, veggie toppings, and meat toppings.
Code: const myPizza = new Pizza("large", "red", "mozzarellla", ["mushrooms", "olives"], ["sausage"]);
Expected Output: Pizza { size: "large", sauce: "red", cheese: "mozzarella", veggieToppings: ["mushrooms, "olives"], meatToppings: ["sausage"]}
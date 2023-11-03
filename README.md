

# Mischief Maggie's Pizza

#### By Noah Kise

#### A web page for a fictional pizza parlor which allows users to create pizzas and add them to a cart and place an order.

## Technologies Used

* HTML
* CSS
* JavaScript
* GitHub

## Description

This web application allows a user to fill out a form to order any number of pizzas.  There are dropdown select boxes for size, sauce, and cheese types.  There are checkmark forms for adding any number of toppings, and a name input field to name their creation.  They can then add their pizza to a cart, and a few business functions under the hood take care of calculating how much their pizza costs.  Another function keeps a running total as they add more items to their cart.  When they are done, they are able to place their fictional order, and receive a confirmation message.

## Business Logic TDD

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

## Setup/Installation Requirements

* To view on the web, open a web broswer and type https://noahkise.github.io/pizza-parlor into the navigation bar and press enter.

* To view github repository containing code, open a web browser and type https://github.com/NoahKise/pizza-parlor into the navigation bar and press enter.

## Known Bugs

* If vegan mozzarella is selected as the cheese, it is displayed in the cart without a space between vegan and mozzarella, further formatting is required that I didn't notice until too late.

## License

Code Licensed under GPL.

Any suggestions for ways I can improve this layout? Reach out to me at noah@kisefamily.com

Copyright (c) November 3rd 2023 Noah Kise
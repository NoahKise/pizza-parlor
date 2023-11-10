

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
Code: let myPizza = new Pizza("large", "red", "mozzarella");
      myPizza.costCalculate();
Expected Output: 20

Test:  It should check the size of the pizza and based on the size add the cost of that size to a new variable called pizzaCost, then return pizzaCost.
Code: let myPizza = new Pizza("giant", "red", "mozzarella");
      myPizza.costCalculate();
Expected Output: 35

Test: It should check if the selected sauce is Pesto and if so add 2 to the pizzaCost.
Code: let myPizza = new Pizza("large", "pesto", "mozzarella");
      myPizza.costCalculate();
Expected Output: 22

Test: It should check the number of veggie toppings on the pizza and add to the cost based on how many are present.
Code: let myPizza = new Pizza("large", "red", "mozzarella", ["mushrooms", "jalapenos"]); 
      myPizza.costCalculate();
Expected Output: 24

Test: It should check the number of meat toppings on the pizza and add to the cost based on how many are present.
Code: let myPizza = new Pizza("large", "red", "mozzarella", ["mushrooms", "jalapenos"], ["pepperoni", "sausage"]);
      myPizza.costCalculate();
Expected Output: 30;

Test: It should charge more per topping if the pizza size is giant.
Code: let myPizza = new Pizza("giant", "red", "mozzarella", ["mushrooms", "jalapenos"], ["pepperoni", "sausage"]);
      myPizza.costCalculate();
Expected Output: 51

#### Describe Cart()

Test: Should return a cart object with a property for totalCost.
Code: const testCart = new Cart();
      testCart;
Expected Output: Cart { totalCost: 0}


#### Describe Cart.prototype.addToCart

Test: It should add the cost of a pizza to the cart's totalCost.
Code: let testCart = new Cart();
      testCart.addToCart(24);
      testCart.totalCost;
Expected Output: 24

Test: It should accumulate a running total cost each time a new pizza is added.
Code: let testCart = new Cart();
      testCart.addToCart(24);
      testCart.addToCart(28);
      testCart.addToCart(35);
      testCart.totalCost;
Expected Output: 87

## Setup/Installation Requirements

* To run this program locally on your own computer, first navigate to the repository (https://github.com/NoahKise/pizza-parlor).  Clone the project by clicking the green "code" button and then copying the provided https link. In your terminal, enter the command "git clone" followed by the copied link. Navigate to the root folder of this project (pizza-parlor) in your terminal and enter the command "code ." to open the project in VS Code. Finally, run a live server to view the project by clicking "Go Live" in the index.html file.

* To view on the web via GH Pages, open a web broswer and type https://noahkise.github.io/pizza-parlor into the navigation bar and press enter.

## Known Bugs

* After you place an order you can still add more items to the cart. Again, something I would like to change but ran out of time.

* If vegan mozzarella is selected as the cheese, it is displayed in the cart without a space between vegan and mozzarella, further formatting is required that I didn't notice until too late.

## License

Code licensed under [GPL](LICENSE.txt)

Any suggestions for ways I can improve this layout? Reach out to me at noah@kisefamily.com

Copyright (c) November 10 2023 Noah Kise
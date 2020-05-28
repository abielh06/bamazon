# Bamazon

# About
* CLI application of hypothetical online store that mimics an Amazon like online store using Node JS and MySql.

# Functionality

* Bamazon Customer

    1. Prints the products in the store.

    2. Prompts customer which product they would like to purchase by ID number.

    3. Asks for the quantity.

    4. If there is a sufficient amount of the product in stock, it will return the total for that purchase.
    However, if there is not enough of the product in stock, it will tell the user that there isn't enough of the product.

    5. If the purchase goes through, it updates the stock quantity to reflect the purchase.
    It will also update the product sales in the department table.

* Bamazon Manager

    1. List a set of menu options:

        - View Products for Sale

        - View Low Inventory

        - Add to Inventory

        - Add New Product

    2. If a manager selects View Products for Sale, the app should list every available item: the item IDs, names, prices, and quantities.

    3. If a manager selects View Low Inventory, then it should list all items with an inventory count lower than five.

    4. If a manager selects Add to Inventory, your app should display a prompt that will let the manager "add more" of any item currently in the store.

    5. If a manager selects Add New Product, it should allow the manager to add a completely new product to the store.


# Technology used
    1. Javascript
    2. Node JS
    3. MySql
    4. NPM packages
        -inquirer
        -mysql
        -console.table

# [Project Demo](https://drive.google.com/file/d/1bv-zfmGF4okP4N3UVnGnbNJi8J2mBRR6/view)

Created by: Abiel Hailemariam
        

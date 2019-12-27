var mysql = require("mysql");

var inquirer = require("inquirer");
var cTable = require("console.table");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Adiam5312.",
    database: "bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    start();
});

function start() {
    connection.query("SELECT * FROM products",

        function (err, res) {
            console.table(res)

            inquirer.prompt([
                {
                    type: "input",
                    name: "id",
                    message: "Please enter the Item ID of the product you would like to buy.\n",
                    validate: function (value) {
                        if (isNaN(value) === false) {
                            return true;
                        }
                        return false;
                    }

                },
                {
                    type: "input",
                    name: "quantity",
                    message: "How many units would you like to purchase?\n",
                }
            ])
                .then(function (answers) {
                    connection.query("SELECT * FROM products Where ?", [{ item_id: answers.id }],
                        function (err, results) {
                            var quantityNeeded = answers.quantity;
                            if (err) throw err;

                            if (quantityNeeded >= results[0].stock_quantity) {
                                console.log("\n---------------------------");
                                console.log("\n---------------------------");
                                console.log("\nInsufficient quantity!!");
                                console.log("\nPlease enter another amount.");
                                console.log("\n---------------------------");
                                console.log("\n---------------------------");
                                start();
                            }else{

                            console.table(results);
                            // console.log(results[0].stock_quantity);
                            var cost = quantityNeeded * results[0].price.toFixed(2);
                            console.log(`\nPrice of product: $ ${cost}`);

                            var updatedStock = results[0].stock_quantity - answers.quantity;
                            console.log("\n" ,updatedStock);
                            connection.query("UPDATE products set ? where ?", [{ stock_quantity: updatedStock }, { item_id: results[0].item_id }], function (err, finalResults) {

                            })
                            
                            start();
                        }
                    }
                    )

                })
        })

}

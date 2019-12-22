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
                    connection.query("SELECT * FROM products Where ?",[{item_id: answers.id}], 
                        function (err, results) {
                            if (err) throw err;
                            console.table(results);
                            console.log(results[0].stock_quantity);

                            var updatedStock = results[0].stock_quantity - answers.quantity;
                            console.log(updatedStock); 
                            connection.query("UPDATE products set ? where ?",[{stock_quantity: updatedStock}, {item_id: results[0].item_id}], function (err, finalResults){
                                
                            start();    
                            })
                            
                        }


                    )

                })

            // for (var i = 0; i < res.length; i++){
            // console.log(res[i].item_id + " || " + res[i].product_name + " ||" + res[i].department_name + " || " + res[i].price + " || " + res[i].stock_quantity);
            // }

        })


        
}

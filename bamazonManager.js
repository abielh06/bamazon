var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_DB"
})
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    viewStock();
});


function viewStock() {
    connection.query("SELECT * FROM products", function (err, res) {
        // console.table(res)
        inquirer.prompt(
            {
                type: "list",
                name: "inventory",
                message: "What would you like to do? View [Products], View [Low_inventory],  [Add_inventory], or [Add_product]",
                choices: ["Products", "Low_inventory", "Add_inventory", "Add_product"]

            }).then(function (answers) {
            if (answers.inventory === "Products"){
                console.table(res);
                viewStock();
            }
            else if (answers.inventory === "Low_inventory") {
                connection.query("SELECT * FROM products where stock_quantity <= 15", function (err, results) { if(err) throw err;
                     console.log(results); 
                     viewStock();
                    //  var lowInventory = results.affectedRows;
                    //  console.log(lowInventory);
                });
            }
            else if (answers.inventory === "Add_inventory") {
                console.log("\n------------------");
                console.log('\n add more to your low quantity select Add_product\n');
                console.log("\n------------------");
                viewStock();
                // updateProduct();
               
                
            }
            else if (answers.inventory === "Add_product") {
                function updateProduct() {
                    console.log("insert a new product...\n");
                    console.log("\n------------------");
                    
                    connection.query("UPDATE products SET stock_quantity = 20 where stock_quantity <= 15" , function(err, lastres){
                        if(err) throw err; 
                        console.log(lastres)
                        console.log("\n Select Products option to see changes"); 
                    })
                }
                updateProduct();
                viewStock();
            }
            else{
                connection.end();
            }
        })
    })
}


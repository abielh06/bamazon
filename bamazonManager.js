var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Adiam5312.",
    database: "bamazon_DB"
})
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    viewStock();
});
var inputs;

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
            }
            else if (answers.inventory === "Low_inventory") {
                connection.query("SELECT * FROM products where stock_quantity <= 5", function (err, results) { if(err) throw err;
                     console.log(results) 
                });
            }
            else if (answers.inventory === "Add_inventory") {
                console.log('\n add more');
                
                
                
            }
            else if (answers.inventory === "Add_product") {
                function createProduct() {
                    console.log("insert a new product...\n");
                    connection.query("INSERT INTO products SET ? where stock_quantity <= 5" , function(err, res){
                        if(err) throw err; 
                        console.log(res.affectedRows)
                    })
                }
            }
            else{
                connection.end();
            }
            
        })
    })
}


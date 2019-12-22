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

function viewStock() {
    connection.query("SELECT * FROM products", function (err, res) {
        // console.table(res)
        inquirer.prompt([
            {
                type: "list",
                name: "inventory",
                message: "What do you want to query?",
                choices: ["View Products for sale", "View Low Inventory", "Add to Inventory", "Add New Product"]

            }
        ])
        .then(function (answers) {
            connection.query("SELECT * FROM products where ?", [{}])
            
        })
    })
}


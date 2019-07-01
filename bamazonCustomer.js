var mysql = require("mysql");
//var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "C0ldpl@y",
    database: "bamazon_db",
}); 

connection.connect(function(error) {
  if (error) throw error;
  display();
});

function display() {
    connection.query("SELECT * from products", function(error, response){
    if (error) throw error;
    for(var i = 0; i < response.length; i++) {
        console.log(response[i].item_id + " | " + response[i].product_name + " | " + response[i].department_name + " | " + response[i].price + " | " + response[i].stock_quantity);
    }
    connection.end();  
   });
}
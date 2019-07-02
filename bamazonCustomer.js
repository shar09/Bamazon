var mysql = require("mysql");
var inquirer = require("inquirer");

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
    connection.query("SELECT * FROM products", function(error, response){
    if (error) throw error;
    for(var i = 0; i < response.length; i++) {
        console.log("Item Id: " + response[i].item_id + " | Product Name: " + response[i].product_name + " | Category: " + response[i].department_name + " | Price: " + response[i].price + " | Stock Left: " + response[i].stock_quantity);
        console.log("\n");
    }
    start();
   });
}

function start() {
    inquirer
      .prompt([
        {
            name: "itemselect",
            type: "input",
            message: "Please type in the id of the product that you would like to buy.",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                    return false;
            }
        },
        {
            name: "quantity",
            type: "input",
            message: "How many of these items would you like to buy?",
            validate: function(value) {
                if (isNaN(value) === false) {
                  return true;
                }
                return false;
            }
        }
      ])
      .then(function(answer) {
        var query = "SELECT * FROM products WHERE ?";  
        connection.query(query, { item_id: answer.itemselect }, function(error, response){
            if (error) throw error;
            //console.log(response);
            console.log("You have selected: " +answer.quantity+ " " +response[0].product_name);
            if(parseInt(answer.quantity) > parseInt(response[0].stock_quantity))
            {
                console.log("Insufficient Quantity");
                connection.end();
            }
            else {
                quantityleft = parseInt(response[0].stock_quantity) - parseInt(answer.quantity);
                var query = "UPDATE products SET ? WHERE ?";
                connection.query(query, 
                [    
                    {
                        stock_quantity: quantityleft
                    },
                    {
                        item_id: answer.itemselect
                    }
                ], function(error, result) {
                    if (error) throw error;
                    //console.log(result);
                }
                )
                console.log("Total Cost Of Purchase: $" +parseInt(answer.quantity) * parseInt(response[0].price));
                connection.end();  
            }
        })
    });
}


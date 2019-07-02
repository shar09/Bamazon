DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
item_id INTEGER(10) NOT NULL,
product_name VARCHAR(20) NOT NULL,
department_name VARCHAR(20) NOT NULL,
price VARCHAR(10) NOT NULL,
stock_quantity VARCHAR(10) NOT NULL,
PRIMARY KEY(item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(50301, "Headphones", "ELECTRONICS", "$50", 20),
(50302, "Bluetooth Speaker", "ELECTRONICS", "200$", 15), 
(50303, "Cell Phone", "ELECTRONICS", "800$", 5),
(30201, "Jacket", "CLOTHING", "100$", 10),
(30202, "Jeans", "CLOTHING", "60$", 30),
(30203, "T-shirt", "CLOTHING", "25$", 50),
(30204, "Shoes", "CLOTHING", "75$", 40),
(30301, "Watch", "ACCESSORIES", "150$", 10),
(30302, "Sunglasses", "ACCESSORIES", "200$", 15),
(30303, "Wallet", "ACCESSORIES", "55$", 30); 
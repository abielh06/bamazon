DROP DATABASE IF EXIST bamazon_DB;
CREATE DATABASE bamazon_DB;
USE bamazon_DB;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (100),
    departmet_name VARCHAR (100),
    price Decimal (10,2),
    stock_quantity INT,
    PRIMARY KEY (id)
);

SELECT * FROM products;

INSERT INTO (product_name, departmet_name, price, stock_quantity);
VALUES ("HP Chromebook", "Electronics", 229, 117),
("Stapler", "Office Supplies", 8.99, 300),
("Multimeter", "Electric Supplies", 29.99, 64),
("Iphone Case", "Electronics", 14.99, 156),
("Mountain Bike", "Sports and Outdoors", 159.99, 76),
("College Hoodie", "Apparel", 31.99, 1000),
("Air Max 95", "Shoes", 160, 111),
("Screen Protector 3 Pack", "Electronics", 15.99, 1000),
("Sports Bottle", "Sports and Outdoor", 24.99, 1000),
("Aligator Clips", "Electric Supplies", 9.99, 1000);
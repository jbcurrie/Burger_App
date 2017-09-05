-- Schema

CREATE DATABASE burgers_db; 

USE burgers_db;

CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    ts TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id)   
);

SELECT * FROM burgers;
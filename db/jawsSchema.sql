USE c3gst1i9ww5eujlq;

CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    ts TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id)   
);


SELECT * FROM burgers;

INSERT INTO burgers (burger_name,devoured) VALUES ('Moses',true);
INSERT INTO burgers (burger_name,devoured) VALUES ('Jessop',true);
INSERT INTO burgers (burger_name,devoured) VALUES ('Phyllo', true);
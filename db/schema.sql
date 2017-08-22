CREATE DATABASE burgers_db;
USE burgers_db;


CREATE TABLE burgers (
	id INTEGER(11) NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(30),
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP NOT NULL,
	PRIMARY KEY(id)
);

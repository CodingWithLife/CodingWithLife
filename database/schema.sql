rDROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE chatRoom (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Messages text

);

INSERT INTO chatRoom (Messages) VALUES ("HEYOO");
INSERT INTO chatRoom (Messages) VALUES ("hello");
INSERT INTO chatRoom (Messages) VALUES ("how are you");
INSERT INTO chatRoom (Messages) VALUES ("where are you");
INSERT INTO chatRoom (Messages) VALUES ("good bye");
INSERT INTO chatRoom (Messages) VALUES ("good morning");
INSERT INTO chatRoom (Messages) VALUES ("good afternoon");


CREATE TABLE User (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Email varchar(55),
  Password varchar (55)
);

INSERT INTO User (Email, Password) VALUES ("jacqueline@holacode.com", "Il0v3puppies");
INSERT INTO User (Email, Password) VALUES ("pancho@holacode.com", "panchodelrancho");
INSERT INTO User (Email, Password) VALUES ("degante@holacode.com", "tocayo123");
INSERT INTO User (Email, Password) VALUES ("marroquin@holacode.com", "baylife1234");
INSERT INTO User (Email, Password) VALUES ("silvina@holacode.com", "chillpill");
INSERT INTO User (Email, Password) VALUES ("erik@holacode.com", "youngmoney");

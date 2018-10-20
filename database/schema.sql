DROP DATABASE IF EXISTS chat;

CREATE DATABASE strangerFriend;

USE strangerFriend;

CREATE TABLE IF NOT EXISTS users (
  id int(11) NOT NULL AUTO_INCREMENT,
  first_name varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  last_name  varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  email      varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  password   varchar(225) COLLATE utf8_unicode_ci NOT NULL,
  created datetime NOT NULL,
  modified datetime NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE chatRoom (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Messages text

);

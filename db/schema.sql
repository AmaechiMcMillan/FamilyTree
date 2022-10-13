DROP DATABASE IF EXISTS familytree_db;
CREATE DATABASE familytree_db;

USE familytree_db;

CREATE TABLE user (
  id INT NOT NULL,
  email VARCHAR(30),
  username VARCHAR(30),
  password VARCHAR(30)
);

CREATE TABLE person (
  id INT NOT NULL,
  user_id INT NOT NULL,
  parent VARCHAR(30),
  spouse_of varchar(30)  
)

CREATE TABLE personHasChild (
  person_id INT NOT NULL,
  child_id INT NOT NULL  
)


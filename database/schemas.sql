CREATE DATABASE IF NOT EXISTS ProductWishlist;

USE ProductWishlist;

CREATE TABLE IF NOT EXISTS wishes {
  id int NOT NULL AUTO_INCREMENT,
  name varchar(320) NOT NULL,
  metal varchar(5) NOT NULL,
  price int NOT NULL,
  imageUrl varchar(320) NOT NULL,
  PRIMARY KEY (id)
}
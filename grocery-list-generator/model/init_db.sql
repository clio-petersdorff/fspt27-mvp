--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists library;
SET foreign_key_checks = 1;

--
-- Create Tables
--

CREATE TABLE library(
    id INT NOT NULL AUTO_INCREMENT, 
    title VARCHAR(40) not null, 
    ingredients VARCHAR(500) not null, 
    method VARCHAR(500) not null, 
    img VARCHAR(200) not null, 
    PRIMARY KEY (id)
    );

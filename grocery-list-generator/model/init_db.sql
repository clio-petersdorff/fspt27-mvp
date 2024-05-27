--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists library;
DROP TABLE if exists schedule;
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

INSERT INTO library (title, img, ingredients, method) VALUES
('Mushroom carbonara', 'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2020/04/vegan-carbonara-portion-800x1200.jpg', 'mushroom, pasta, cashews, onion', ''),
('One-pot lasagne', 'https://www.eat-this.org/wp-content/uploads/2020/03/eat_this_die_leckerste_vegane_lasagnesuppe-960x640@2x.jpg', 'mushrooms, tomato, lasange sheets, carrot, celery, onion, vegan cheese, miso paste', ''),
('Butter \'chicken\' curry', 'https://cdn.pickuplimes.com/cache/e6/95/e695f8d49e4fffbe9680f12ab5125a3e.jpg', 'tofu, coconut milk, tomato, rice, cashews, garam masala', ''),
('Caesar salad', 'https://simple-veganista.com/wp-content/uploads/2019/03/best-vegan-caesar-salad-4jpg.jpg', 'little gem lettuce, chickpeas, tofu, tomato paste, tenderstem broccoli, cashews, capers', ''),
('Mushroom risotto', 'https://cdn.loveandlemons.com/wp-content/uploads/2023/01/mushroom-risotto-recipe.jpg', 'aborio rice, stock, mushrooms, garlic, white wine', ''),
('Tofu scramble', 'https://cdn.loveandlemons.com/wp-content/uploads/2021/01/tofu-scramble-1.jpg', 'tofu, cherry tomatoes, spring onion, soughdough bread', ''),
('Jackfruit tacos', 'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2017/05/pulled-jackfruit-tacos-macro-800x1200.jpg', 'tacos, onion, bbq sauce, jackfruit, red pepper, avocado', ''),
('Pesto pasta', 'https://www.kimscravings.com/wp-content/uploads/2019/07/Pesto-Pasta-5.jpg', 'basil, lemon juice, sunflower seeds, tenderstem broccoli, pasta, garlic', ''),
('Pad Thai', 'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2016/05/vegan-pad-thai-800x1200.jpg', 'flat noodles, soy sauce, tofu, carrot, red pepper, spring onion, basil, tamarind sauce', ''),
('Kale salad', 'https://cdn.loveandlemons.com/wp-content/uploads/2019/01/IMG_15972-crop2.jpg', 'kale, mushrooms, mustard, sunflower seeds, cashews, nutritional yeast', ''),
('Gyros', 'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2017/06/vegan-gyros-one-800x1200.jpg', '', '');

CREATE TABLE schedule (
    id INT NOT NULL AUTO_INCREMENT, 
    title VARCHAR(40) not null, 
    ingredients VARCHAR(500) not null, 
    method VARCHAR(500) not null, 
    img VARCHAR(200) not null, 
    PRIMARY KEY (id)
    );
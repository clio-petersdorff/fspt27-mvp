--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists Recipes;
DROP TABLE if exists Ingredients;
DROP TABLE if exists RecipesIngredients;
SET foreign_key_checks = 1;

--
-- Create Tables
--

CREATE TABLE Recipes
(
    id int AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(40) not null, 
    method VARCHAR(500) not null, 
    img VARCHAR(200) not null, 
    selected BOOLEAN NOT NULL DEFAULT FALSE

);

CREATE TABLE Ingredients
(
    ingredientID int AUTO_INCREMENT PRIMARY KEY,
    amount int NOT NULL,
    measure nchar(50) NOT NULL,
    ingredient int NOT NULL
);

CREATE TABLE RecipesIngredients
(
    id int NOT NULL,
    ingredientID int NOT NULL,

    CONSTRAINT PK_RecipeIngredient PRIMARY KEY
    (
        id,
        ingredientID
    ),
    FOREIGN KEY (id) REFERENCES Recipes (id),
    FOREIGN KEY (ingredientID) REFERENCES Ingredients (ingredientID)
);

INSERT INTO Recipes (title, img, method) VALUES
('Mushroom carbonara', 'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2020/04/vegan-carbonara-portion-800x1200.jpg', '[]'),
('One-pot lasagne', 'https://www.eat-this.org/wp-content/uploads/2020/03/eat_this_die_leckerste_vegane_lasagnesuppe-960x640@2x.jpg', '[]'),
('Butter \'chicken\' curry', 'https://cdn.pickuplimes.com/cache/e6/95/e695f8d49e4fffbe9680f12ab5125a3e.jpg', '[]'),
('Caesar salad', 'https://simple-veganista.com/wp-content/uploads/2019/03/best-vegan-caesar-salad-4jpg.jpg', '[]'),
('Mushroom risotto', 'https://cdn.loveandlemons.com/wp-content/uploads/2023/01/mushroom-risotto-recipe.jpg', '[]'),
('Tofu scramble', 'https://cdn.loveandlemons.com/wp-content/uploads/2021/01/tofu-scramble-1.jpg', '[]'),
('Jackfruit tacos', 'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2017/05/pulled-jackfruit-tacos-macro-800x1200.jpg', '[]'),
('Pesto pasta', 'https://www.kimscravings.com/wp-content/uploads/2019/07/Pesto-Pasta-5.jpg', '[]'),
('Pad Thai', 'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2016/05/vegan-pad-thai-800x1200.jpg', '[]'),
('Kale salad', 'https://cdn.loveandlemons.com/wp-content/uploads/2019/01/IMG_15972-crop2.jpg', '[]'),
('Gyros', 'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2017/06/vegan-gyros-one-800x1200.jpg','[]');

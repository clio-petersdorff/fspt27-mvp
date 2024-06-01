--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists Recipes;
DROP TABLE if exists Ingredients;
DROP TABLE if exists RecipesIngredients;
DROP TABLE if exists GroceryList;
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
    recipeID int NOT NULL,
    ingredientName VARCHAR(100) NOT NULL,
    ingredientAmount int NOT NULL,
    ingredientMeasure  VARCHAR(50) NOT NULL
);

-- CREATE TABLE RecipesIngredients
-- (
--     id int NOT NULL,
--     ingredientID int NOT NULL,

--     CONSTRAINT PK_RecipeIngredient PRIMARY KEY
--     (
--         id,
--         ingredientID,    
--         amount int NOT NULL,
--         measure VARCHAR(50) NOT NULL,
--         ingredient int NOT NULL
--     ),
--     FOREIGN KEY (id) REFERENCES Recipes (id),
--     FOREIGN KEY (ingredientID) REFERENCES Ingredients (ingredientID)
-- );


CREATE TABLE GroceryList
(
    ingredientID int AUTO_INCREMENT PRIMARY KEY,
    amount int NOT NULL,
    measure nchar(50) NOT NULL,
    ingredient int NOT NULL
);


-- INSERTING RECIPES

-- Musroom carbonara
INSERT INTO Recipes (title, img, method)
VALUES ('Mushroom carbonara', 'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2020/04/vegan-carbonara-portion-800x1200.jpg', '[]');

SET @last_recipe_id = LAST_INSERT_ID(); 

INSERT INTO Ingredients (recipeID, ingredientName, ingredientAmount, ingredientMeasure)
VALUES 
(@last_recipe_id, 'pasta', 300, 'g'),
(@last_recipe_id, 'cashew nuts', 50, 'g'),
(@last_recipe_id, 'oat milk', 250, 'ml'),
(@last_recipe_id, 'lemon juice', 2, 'tbsp'),
(@last_recipe_id, 'garlic powder', 1.5, 'tsp'),
(@last_recipe_id, 'salt', 0.5, 'tsp'),
(@last_recipe_id, 'mushrooms', 300, 'g'),
(@last_recipe_id, 'soy sauce', 4, 'tbsp'),
(@last_recipe_id, 'apple cider vinegar', 2, 'tbsp'),
(@last_recipe_id, 'water', 2, 'tbsp'),
(@last_recipe_id, 'maple syrup', 2, 'tsp'),
(@last_recipe_id, 'smoked paprika', 2, 'tsp'),
(@last_recipe_id, 'tomato purée', 2, 'tbsp');

-- One-pot lasagne
INSERT INTO Recipes (title, img, method) VALUES
('One-pot lasagne', 'https://www.eat-this.org/wp-content/uploads/2020/03/eat_this_die_leckerste_vegane_lasagnesuppe-960x640@2x.jpg', '[]');

SET @last_recipe_id = LAST_INSERT_ID(); 

INSERT INTO Ingredients (recipeID, ingredientName, ingredientAmount, ingredientMeasure)
VALUES 
(@last_recipe_id, 'onion', 1, 'na'),
(@last_recipe_id, 'sticks of celery', 2, 'na'),
(@last_recipe_id, 'carrots', 2, 'na'),
(@last_recipe_id, 'olive oil', 1, 'tbsp'),
(@last_recipe_id, 'mushrooms', 400, 'g'),
(@last_recipe_id, 'garlic cloves', 4, 'na'),
(@last_recipe_id, 'large sprigs of fresh rosemary', 3, 'na'),
(@last_recipe_id, 'red wine', 150, 'ml'),
(@last_recipe_id, 'tins of chopped tomato', 2, 'na'),
(@last_recipe_id, 'brown rice miso paste', 2, 'tbsp'),
(@last_recipe_id, 'dried oregano', 2, 'tsp'),
(@last_recipe_id, 'lasagne sheets', 200, 'g'),
(@last_recipe_id, 'vegan cheese', 100, 'g');

-- Butter chicken curry
INSERT INTO Recipes (title, img, method) VALUES
('Butter \'chicken\' curry', 'https://cdn.pickuplimes.com/cache/e6/95/e695f8d49e4fffbe9680f12ab5125a3e.jpg', '[]');

SET @last_recipe_id = LAST_INSERT_ID(); 

INSERT INTO Ingredients (recipeID, ingredientName, ingredientAmount, ingredientMeasure)
VALUES 
(@last_recipe_id, 'onion', 1, 'na');

-- Caesar salad
INSERT INTO Recipes (title, img, method) VALUES
('Caesar salad', 'https://simple-veganista.com/wp-content/uploads/2019/03/best-vegan-caesar-salad-4jpg.jpg', '[]');

SET @last_recipe_id = LAST_INSERT_ID(); 

INSERT INTO Ingredients (recipeID, ingredientName, ingredientAmount, ingredientMeasure)
VALUES 
(@last_recipe_id, 'onion', 1, 'na');

-- Tofu Scramble
INSERT INTO Recipes (title, img, method) VALUES
('Tofu scramble', 'https://cdn.loveandlemons.com/wp-content/uploads/2021/01/tofu-scramble-1.jpg', '[]');

SET @last_recipe_id = LAST_INSERT_ID(); 

INSERT INTO Ingredients (recipeID, ingredientName, ingredientAmount, ingredientMeasure)
VALUES 
(@last_recipe_id, 'onion', 1, 'na');
    
-- Jackfruit tacos
INSERT INTO Recipes (title, img, method) VALUES
('Jackfruit tacos', 'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2017/05/pulled-jackfruit-tacos-macro-800x1200.jpg', '[]');

SET @last_recipe_id = LAST_INSERT_ID(); 

INSERT INTO Ingredients (recipeID, ingredientName, ingredientAmount, ingredientMeasure)
VALUES 
(@last_recipe_id, 'onion', 1, 'na');
    
-- Pesto Pasta
INSERT INTO Recipes (title, img, method) VALUES
('Pesto pasta', 'https://www.kimscravings.com/wp-content/uploads/2019/07/Pesto-Pasta-5.jpg', '[]');

SET @last_recipe_id = LAST_INSERT_ID(); 

INSERT INTO Ingredients (recipeID, ingredientName, ingredientAmount, ingredientMeasure)
VALUES 
(@last_recipe_id, 'onion', 1, 'na');
    
-- Pad Thai
INSERT INTO Recipes (title, img, method) VALUES
('Pad Thai', 'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2016/05/vegan-pad-thai-800x1200.jpg', '[]');

SET @last_recipe_id = LAST_INSERT_ID(); 

INSERT INTO Ingredients (recipeID, ingredientName, ingredientAmount, ingredientMeasure)
VALUES 
(@last_recipe_id, 'onion', 1, 'na');
    
-- Kale salad
INSERT INTO Recipes (title, img, method) VALUES
('Kale salad', 'https://cdn.loveandlemons.com/wp-content/uploads/2019/01/IMG_15972-crop2.jpg', '[]');

SET @last_recipe_id = LAST_INSERT_ID(); 

INSERT INTO Ingredients (recipeID, ingredientName, ingredientAmount, ingredientMeasure)
VALUES 
(@last_recipe_id, 'onion', 1, 'na');
    
-- Gyros
INSERT INTO Recipes (title, img, method) VALUES
('Gyros', 'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2017/06/vegan-gyros-one-800x1200.jpg','[]');

SET @last_recipe_id = LAST_INSERT_ID(); 

INSERT INTO Ingredients (recipeID, ingredientName, ingredientAmount, ingredientMeasure)
VALUES 
(@last_recipe_id, 'onion', 1, 'na');

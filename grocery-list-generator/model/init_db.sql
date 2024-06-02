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


CREATE TABLE GroceryList
(
    groceryID int AUTO_INCREMENT PRIMARY KEY,
    -- recipeID int NOT NULL,
    ingredientName VARCHAR(100) NOT NULL,
    ingredientAmount int NOT NULL,
    ingredientMeasure  VARCHAR(50) NOT NULL
);


-- INSERTING RECIPES

-- Musroom carbonara
INSERT INTO Recipes (title, img, method)
VALUES ('Mushroom carbonara', 
    'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2020/04/vegan-carbonara-portion-800x1200.jpg', 
    'Creamy Vegan Mushroom Carbonara is a delightful plant-based twist on the classic Italian dish. 
    This version features tender mushrooms sautéed to perfection, providing a rich, umami flavor. 
    The sauce is a velvety blend of cashews or plant-based cream, nutritional yeast for a cheesy taste, 
    and a touch of miso or soy sauce for depth. Tossed with your favorite pasta, this dish offers a 
    luxurious, dairy-free experience that is both comforting and indulgent. Perfect for a quick weeknight 
    dinner or a special occasion, it satisfies both vegans and non-vegans alike.');

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
('One-pot lasagne', 'https://www.eat-this.org/wp-content/uploads/2020/03/eat_this_die_leckerste_vegane_lasagnesuppe-960x640@2x.jpg', 'One-pot lasagne is a convenient and delicious twist on the traditional lasagne, designed to simplify the cooking process without sacrificing flavor. This dish is made by layering lasagne noodles, rich marinara sauce, and a savory mixture of seasoned ground meat (or plant-based alternative) directly in a single pot. The addition of ricotta or a vegan cheese substitute adds creaminess, while a topping of shredded mozzarella melts to golden perfection. The lasagne is simmered and then baked in the same pot, making cleanup a breeze. This hearty, comforting meal is perfect for busy weeknights, offering all the beloved flavors of classic lasagne with minimal effort.');

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
('Butter \'chicken\' curry', 'https://cdn.pickuplimes.com/cache/e6/95/e695f8d49e4fffbe9680f12ab5125a3e.jpg', "Tofu Butter 'Chicken' Curry is a delectable vegan alternative to the traditional Indian dish, butter chicken. This curry features tender tofu cubes marinated in a blend of aromatic spices, then pan-fried until golden. The tofu is simmered in a rich, creamy tomato sauce made with coconut milk, cashews, and a medley of spices like garam masala, cumin, and turmeric. The result is a luscious, velvety curry that's bursting with flavor, offering a perfect balance of sweetness, spice, and creaminess. Served over basmati rice or with naan bread, this dish provides a satisfying and comforting meal that will delight vegans and non-vegans alike.");

SET @last_recipe_id = LAST_INSERT_ID(); 

INSERT INTO Ingredients (recipeID, ingredientName, ingredientAmount, ingredientMeasure)
VALUES 
(@last_recipe_id, 'firm tofu', 450, 'g'),
(@last_recipe_id, 'ground turmeric', 0.5, 'tsp'),
(@last_recipe_id, 'raw cashews', 35, 'g'),
(@last_recipe_id, 'vegetable oil', 1, 'tbsp'),
(@last_recipe_id, 'garlic cloves', 5, 'na'),
(@last_recipe_id, 'onion', 1, 'na'),
(@last_recipe_id, 'jalapeño', 1, 'na'),
(@last_recipe_id, 'freshly grated ginger', 2, 'tsp'),
(@last_recipe_id, 'garam masala', 1.5, 'tbsp'),
(@last_recipe_id, 'ground coriander', 1.5, 'tbsp'),
(@last_recipe_id, 'ground cumin', 1.5, 'tbsp'),
(@last_recipe_id, 'salt', 1, 'tsp'),
(@last_recipe_id, 'cayenne pepper', 0.5, 'tsp'),
(@last_recipe_id, 'diced tomatoes', 400, 'g'),
(@last_recipe_id, 'tomato puree', 66, 'g'),
(@last_recipe_id, 'agave syrup', 0.5, 'tbsp'),
(@last_recipe_id, 'coconut milk', 400, 'ml');

-- Pad Thai
INSERT INTO Recipes (title, img, method) VALUES
('Pad Thai', 'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2016/05/vegan-pad-thai-800x1200.jpg', "Pad Thai is a beloved Thai street food dish known for its vibrant flavors and satisfying textures. This stir-fried noodle dish features rice noodles tossed with a tantalizing mix of tamarind paste, fish sauce (or soy sauce for a vegan version), palm sugar, and lime juice, creating a harmonious balance of sweet, salty, and tangy flavors. It includes stir-fried vegetables, tofu or shrimp, and is often garnished with crunchy peanuts, fresh bean sprouts, and a sprinkle of cilantro. The dish is typically finished with a squeeze of lime and a dash of chili flakes, offering a delightful combination of fresh and bold tastes in every bite. Perfect for a quick, flavorful meal, Pad Thai is both delicious and easy to prepare.");

SET @last_recipe_id = LAST_INSERT_ID(); 

INSERT INTO Ingredients (recipeID, ingredientName, ingredientAmount, ingredientMeasure)
VALUES 
(@last_recipe_id, 'vegetable oil', 5, 'tbsp'),
(@last_recipe_id, 'firm tofu', 600, 'g'),
(@last_recipe_id, 'rice noodles', 200, 'g'),
(@last_recipe_id, 'garlic cloves', 6, 'na'),
(@last_recipe_id, 'medium shallots', 3, 'na'),
(@last_recipe_id, 'green onion', 3, 'na'),
(@last_recipe_id, 'chili peppers', 1, 'na'),
(@last_recipe_id, 'carrots', 1.5, 'na'),
(@last_recipe_id, 'red bell peppers', 1.5, 'na'),
(@last_recipe_id, 'soy sauce', 80, 'ml'),
(@last_recipe_id, 'tamarind paste', 4, 'tbsp'),
(@last_recipe_id, 'granulated sugar', 3, 'tbsp'),
(@last_recipe_id, 'rice vinegar', 20, 'ml'),
(@last_recipe_id, 'sriracha sauce', 20, 'ml'),
(@last_recipe_id, 'lime', 0.5, 'na');
    
-- Pesto Pasta
INSERT INTO Recipes (title, img, method) VALUES
('Pesto pasta', 'https://www.kimscravings.com/wp-content/uploads/2019/07/Pesto-Pasta-5.jpg', "Pesto Pasta is a simple yet flavorful Italian dish that highlights the vibrant taste of fresh basil pesto. The pesto sauce is made by blending fresh basil leaves, pine nuts, garlic, Parmesan cheese (or a vegan alternative), and olive oil into a smooth, fragrant mixture. This vibrant green sauce is then tossed with al dente pasta, such as spaghetti, fettuccine, or penne, coating each strand or piece with its aromatic goodness. Often garnished with a sprinkle of extra Parmesan cheese and a handful of toasted pine nuts, Pesto Pasta is a quick, delicious meal that embodies the freshness of its ingredients, making it perfect for a light lunch or a delightful dinner.");

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
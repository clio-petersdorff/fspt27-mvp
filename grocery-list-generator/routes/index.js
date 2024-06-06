var express = require('express');
var router = express.Router();
const db = require("../model/helper");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});

// GET all recipes in library
router.get("/Recipes", async function(req, res) {
  console.log("GETTING")
  try {
    const results = await db("SELECT * FROM Recipes;");
    res.status(200).send(results.data);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

// GET all ingredients in library
router.get("/Ingredients", async function(req, res) {
  console.log("GETTING")
  try {
    const results = await db("SELECT * FROM Ingredients;");
    res.status(200).send(results.data);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

// GET a specific recipe
router.get("/Recipes/:id", async function(req, res) {
  try {
    const results = await db(`SELECT * FROM Recipes WHERE id = ${+req.params.id}`);
    if (results.data.length === 1) {
      res.status(200).send(results.data[0]);
    } else {
      res.status(404).send("Error: Recipe not found");
    }
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});


// POST a new recipe with ingredients
router.post('/Recipes', async function(req, res) {
  
  // console.log(req.body);
  console.log('adding new recipe to Recipes');
  const { title, img, method, ingredients } = req.body;
  // console.log(title)
  try {

    // Insert the new recipe
    const result = await db(
      `INSERT INTO Recipes (title, img, method) VALUES ('${title}','${img}','${method}');
      SELECT LAST_INSERT_ID() as lastRecipeId;`
    );
    console.log("sql respone: ", result.data[0].insertId)

    // Get the last inserted recipe ID
    const lastRecipeId = result.data[0].insertId;
    console.log('Last Inserted Recipe ID:', lastRecipeId);

    // Insert the ingredients
    const ingredientPromises = ingredients.map(i => (
      db(
        `INSERT INTO Ingredients (recipeID, ingredientName, ingredientAmount, ingredientMeasure)
        VALUES (${lastRecipeId}, "${i.ingredientName}", ${i.ingredientAmount}, "${i.ingredientMeasure}");`
      )
    ))

    await Promise.all(ingredientPromises);

    const results = await db('SELECT * FROM Recipes');
    res.status(201).send(results);
  } catch (e) {
    console.error('Error occurred:', e);
    res.status(500).send({ error: e.message });
  }
});



// PUT to select a meal
router.put("/Recipes/:id", async function(req,res){
  try {
    const results = await db(`SELECT * FROM Recipes WHERE id = ${+req.params.id}`);
    if (results.data.length === 1) {
      sqlQuery = `UPDATE Recipes 
      SET selected =  NOT selected
      WHERE id = ${+req.params.id}`;
      await db(sqlQuery);
      // return table so that you can see it added the item
      const results = await db("SELECT * FROM Recipes");
      res.status(200).send(results.data);
    } else {
      res.status(404).send("Error: Recipe not found");
    }
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
})

// DELETE a recipe from the DB
router.delete("/Recipes/:id", async function(req, res) {
  //your code here
  try {
    const check = await db(
      `SELECT * FROM Recipes WHERE id = ${+req.params.id}`
    );
    if (check.data.length === 1) {
      await db(`DELETE FROM Recipes WHERE id = ${+req.params.id}`);
      const results = await db("SELECT * FROM Recipes;");
      res.status(200).send(results.data);
    } else {
      res.status(404).send("Error: Recipe not found");
    }
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

// POST ingredients from selected recipes to Groceries table
router.post("/Groceries", async function(req,res){
    idArr = req.body.join(",")
    console.log(idArr)

    try {
      const rows = await db(`SELECT * FROM GroceryList;`);
      // console.log(rows)
      if (rows.data.length > 0) {
        await db("DELETE FROM GroceryList;");
      }
      if(idArr){
        await db(
          `INSERT INTO GroceryList (ingredientName, ingredientAmount, ingredientMeasure)
          SELECT ingredientName, totalAmount, ingredientMeasure 
          FROM (
              SELECT ingredientName, ingredientMeasure, SUM(ingredientAmount) AS totalAmount
              FROM Ingredients
              WHERE recipeID IN (${idArr})
              GROUP BY ingredientName, ingredientMeasure
          ) AS SummedIngredients;`
        )
      }

      const results = await db("SELECT * FROM GroceryList;");
      // console.log(results.data)
      res.status(201).send(results.data);
      // res.status(200)
    } catch (e){
      res.status(500).send({ error: e.message });
    }
})

// GET all items in GROCERY LIST
router.get("/Groceries", async function(req, res) {
  console.log("GETTING")
  try {
    const results = await db(
      `SELECT * FROM GroceryList;`)
    res.status(200).send(results.data);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

// DELETE all items in GROCERY LIST
router.delete("/Groceries", async function(req,res){
  console.log("DELETE ALL")
  try {
    const rows = await db(`SELECT * FROM GroceryList;`);
    // console.log(rows)
    if (rows.data.length > 0) {
      await db("DELETE FROM GroceryList;");
    }
    const results = await db("SELECT * FROM GroceryList;");
    res.status(200).send(results.data);  
    } catch(e){
    res.status(500).send({ error: e.message });
  }
})

module.exports = router;

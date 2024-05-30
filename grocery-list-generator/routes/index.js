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

// POST a new recipe
router.post("/Recipes", async function(req, res){
  console.log(req.body);
  console.log("adding new recipe to Recipes");
  const { title, img, method } = req.body;
  try {
    const sql = `INSERT INTO Recipes (title, img, method) VALUES ('${title}','${img}','${method}')`;
    await db(sql);
    const results = await db("SELECT * FROM Recipes;");
    res.status(201).send(results.data);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
})

// PUT to select a meal
router.put("/Recipes/:id", async function(req,res){
  try {
    const results = await db(`SELECT * FROM Recipes WHERE id = ${+req.params.id}`);
    if (results.data.length === 1) {
      sqlQuery = `UPDATE Recipes 
      SET selected = !selected
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



module.exports = router;

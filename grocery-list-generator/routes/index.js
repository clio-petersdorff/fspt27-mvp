var express = require('express');
var router = express.Router();
const db = require("../model/helper");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});

// GET all recipes in library
router.get("/library", async function(req, res) {
  console.log("GETTING")
  try {
    const results = await db("SELECT * FROM library;");
    res.status(200).send(results.data);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

// GET a specific recipe
router.get("/library/:id", async function(req, res) {
  //your code here
  try {
    const results = await db(`SELECT * FROM library WHERE id = ${+req.params.id}`);
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
router.post("/library", async function(req, res){
  console.log(req.body);
  console.log("adding recipe");
  const { title, img, ingredients, method } = req.body;
  try {
    const sql = `INSERT INTO library (title, img, ingredients, method) VALUES ('${title}','${img}','${ingredients}','${method}')`;
    await db(sql);
    const results = await db("SELECT * FROM library;");
    res.status(201).send(results.data);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
})

// DELETE a recipe from the DB
router.delete("/library/:id", async function(req, res) {
  //your code here
  try {
    const check = await db(
      `SELECT * FROM library WHERE id = ${+req.params.id}`
    );
    if (check.data.length === 1) {
      await db(`DELETE FROM library WHERE id = ${+req.params.id}`);
      const results = await db("SELECT * FROM library;");
      res.status(200).send(results.data);
    } else {
      res.status(404).send("Error: Recipe not found");
    }
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

module.exports = router;

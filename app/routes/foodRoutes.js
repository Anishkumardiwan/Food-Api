const express = require('express');
const { join } = require('path');
const foodController = require(join(__dirname, '../Controllers/foodController'));
const app = express();

// Reading All Foods
app.get("/foods", foodController.findAll);

// Create Food
app.post("/foods/create", foodController.createFood);

// Find By Id
app.get('/foods/:id', foodController.findOne);

// Update the Existing food by id
app.patch("/foods/update/:id", foodController.updateFood);

// Delete Food
app.delete("/foods/delete/:id", foodController.deleteFood);

module.exports = app;
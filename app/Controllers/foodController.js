const { join } = require('path');
const foodModel = require(join(__dirname, '../models/food'));

exports.findAll = (req, res) => {
    foodModel.find({}).then((foods) => {
        res.send(foods);
    }).catch((err) => {
        res.status(500).send(err);
    });
}

exports.createFood = (req, res) => {
    const { name, calories } = req.body;
    const foodObj = { name: name, calories: calories }

    const food = new foodModel(foodObj);
    food.save().then((food) => {
        console.log(food);
        res.send(food);
    }).catch((err) => {
        res.send(err);
    });
}

exports.findOne = (req, res) => {
    foodModel.findById(req.params.id).then((food) => {
        console.log(food);
        res.send(food);
    }).catch((err) => {
        res.status(500).send(err);
    });
}

exports.updateFood = (req, res) => {
    foodModel.findByIdAndUpdate(req.params.id, req.body).then((food) => {
        console.log(food);
        res.send(food);
    }).catch((err) => {
        res.status(500).send(err);
    });
}

exports.deleteFood = (req, res) => {
    foodModel.findByIdAndDelete(req.params.id, req.body).then((food) => {
        if (!food) {
            res.send("no item found");
        }
        res.send();
    }).catch((err) => {
        res.status(500).send(err);
    });
}
const express = require('express');
const { Car } = require('../Models/car');
require("dotenv").config();
const router = express.Router();

// Create a new car in DB
router.post("/create", async (req, res) => {
    const newCar = new Car({
        brand: req.body.data.brand,
        model: req.body.data.model,
        year: req.body.data.year,
        mileage: req.body.data.mileage,
        colour: req.body.data.colour,
        price: req.body.data.price,
        bodyStyle: req.body.data.bodyStyle,
        description: req.body.data.description,
        images: req.body.data.images,
    });

    await Car.create(newCar);
    res.send("Car saved to the database");
});

// Get all cars in DB
router.get("/read", async (req, res) => {
    const carList = await Car.find();
    res.send(JSON.stringify(carList));
});

// Get a single car by ID
router.get("/:id", async (req, res) => {
    const carId = req.params.id;
    const car = await Car.findById(carId);
    res.send(JSON.stringify(car));
})

// Update a car
router.put("/update/:id", async (req, res) => {
    const car_id = req.params.id;
    await Car.findByIdAndUpdate(car_id, {
        brand: req.body.data.brand,
        model: req.body.data.model,
        year: req.body.data.year,
        mileage: req.body.data.mileage,
        colour: req.body.data.colour,
        price: req.body.data.price,
        bodyStyle: req.body.data.bodyStyle,
        description: req.body.data.description,
        images: req.body.data.images,
    });

    res.send("Car updated successfully");
});

// Delete a car
router.delete("/delete/:id", async (req, res) => {
    const car_id = req.params.id;
    await Car.findByIdAndDelete(car_id);
    res.send("Car deleted");
})

module.exports = router;
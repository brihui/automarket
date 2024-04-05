const express = require('express');
const mongoose = require('mongoose');
const { Car } = require('./Models/car');
require("dotenv").config();

const app = express();
const port = 5000;

mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to MongoDB..."))
.catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json());

app.post("/create", async (req, res) => {
    const newCar = new Car({
        brand: req.body.brand,
        model: req.body.model,
        year: req.body.year,
        mileage: req.body.mileage,
        colour: req.body.colour,
        price: req.body.price,
        bodyStyle: req.body.bodyStyle,
        description: req.body.description,
        images: req.body.images,
    });

    await Car.create(newCar);
    res.send("Car saved to the database");
});

app.get("/read", async (req, res) => {
    const carList = await Car.find();
    res.send(JSON.stringify(carList));
});

app.put("/update/:id", async (req, res) => {
    const car_id = req.params.id;
    await Car.findByIdAndUpdate(car_id, {
        brand: req.body.brand,
        model: req.body.model,
        year: req.body.year,
        mileage: req.body.mileage,
        colour: req.body.colour,
        price: req.body.price,
        bodyStyle: req.body.bodyStyle,
        description: req.body.description,
        images: req.body.images,
    });

    res.send("Car updated successfully");
});

app.delete("/delete/:id", async (req, res) => {
    const car_id = req.params.id;
    await Car.findByIdAndDelete(car_id);
    res.send("Car deleted");
})

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
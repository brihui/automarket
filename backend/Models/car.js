const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    mileage: {
        type: Number,
        required: true,
    },
    colour: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    bodyStyle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    images: {
        type: String,
        required: true,
    },
});

const Car = mongoose.model("Car", carSchema);

exports.Car = Car;
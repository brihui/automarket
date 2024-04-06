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
        required: false,
    },
    price: {
        type: Number,
        required: true,
    },
    bodyStyle: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: true,
    },
    images: {
        type: String,
        required: false,
    },
});

const Car = mongoose.model("Car", carSchema);

exports.Car = Car;
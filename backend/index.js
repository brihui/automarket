const express = require('express');
const mongoose = require('mongoose');
const { Car } = require('./Models/car');
const cors = require('cors');
require("dotenv").config();

const app = express();
const port = 5000;

const cars = require("./Routes/cars");

mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to MongoDB..."))
.catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use(cors());
app.use("/cars", cars);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
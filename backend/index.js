const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const isAuth = require("./middleware/auth");
require("dotenv").config();

const app = express();
const port = 5000;

const cars = require("./Routes/cars");
const users = require("./Routes/users");

mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to MongoDB..."))
.catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use(cors());
app.use(isAuth);
app.use("/cars", cars);
app.use("/users", users);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
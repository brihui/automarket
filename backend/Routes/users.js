const express = require("express");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { User } = require("../Models/user");
const router = express.Router();

// Get user
router.get("/:id", async (req, res) => {
    const user_id = req.params.id;
    const user = await User.findById(user_id);
    res.send(JSON.stringify(user));
});

// Register a user
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.data.username,
        email: req.body.data.email,
        password: req.body.data.password,
        isAdmin: req.body.data.isAdmin,
    });

    const user = await User.findOne({ email: newUser.email });
    if (user) {
        throw new Error("Email already being used");
    }

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);

    await newUser.save();
    const token = newUser.generateAuthToken();

    const data = {
        token: token,
        id: newUser.id,
        isAdmin: newUser.isAdmin,
    };

    res.send(data);
});

// Login a user
router.post("/login", async (req, res) => {
    const user = await User.findOne({ email: req.body.data.email });
    if (!user) {
        throw new Error("No user with provided email");
    }

    const validPassword = await bcrypt.compare(req.body.data.password, user.password);
    if (!validPassword) {
        throw new Error("Invalid password");
    }

    const token = user.generateAuthToken();

    const data = {
        token: token,
        id: user.id,
        isAdmin: user.isAdmin,
    };

    res.send(data);
});

module.exports = router;
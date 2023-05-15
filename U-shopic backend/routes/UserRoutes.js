const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userModel } = require("../model/UserModel");
require("dotenv").config();

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
    const { name, email, phone, password } = req.body;
    try {
        bcrypt.hash(password, 5, async (err, secure_password) => {
            if (err) {
                console.log(err);
            }
            else {
                const user = new userModel({ name, email, phone, password: secure_password })
                await user.save();
                res.send({ "msg": "Registered",user })
            }
        });
    }
    catch (err) {
        res.send({ "msg": "Error in registering the user" })
        console.log(err);
    }
})

userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    try {
        const user = await userModel.find({ email });
        const hashed_pass = user[0].password;
        if (user.length > 0) {
            bcrypt.compare(password, hashed_pass, (err, result) => {
                if (result) {
                    const token = jwt.sign({ userID: user[0]._id }, "mohit");
                    res.send({ "msg": "Login Successfully", "token": token })
                }
                else {
                    res.send({ "msg": "Worng Input" })
                }
            });

        }
        else {
            res.send({ "msg": "Worng Input" })
        }
    }
    catch (err) {
        res.send({ "msg": "Something gone wrong" });
        console.log(err);
    }
})

module.exports = { userRouter };
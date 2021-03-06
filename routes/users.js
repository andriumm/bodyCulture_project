var express = require("express");
var router = express.Router();
//const db = require("../model/helper");
const models = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const supersecret = process.env.SUPER_SECRET;

/* REGISTER => POST one user */
router.post("/register", async function (req, res, next) {
	const { firstname, lastname, phone, email, password } = req.body;
	try {
		await models.Users.create({
			firstname,
			lastname,
			phone,
			email,
			password,
		});
		res.send({ message: "New user added succesfully!" });
	} catch (error) {
		res.status(500).send(error);
	}
});

/* LOGIN => POST user  */
router.post("/login", async function (req, res, next) {
	const { email, password } = req.body;
	try {
		const user = await models.Users.findOne({ where: { email } });

		if (user === null) {
			res.send({ message: "User doesn't exist" });
		} else {
			user_id = user.id;
			const correctPassword = await bcrypt.compare(password, user.password);
			if (!correctPassword) throw new Error("Incorrect password");
			var token = jwt.sign({ user_id }, supersecret);
			res.send({ message: "Login successful, here is your token", token });
		}
	} catch (error) {
		res.status(400).send({ message: error.message });
	}
});

module.exports = router;

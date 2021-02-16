var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET users listing. */
// router.get("/", function (req, res, next) {
// 	res.send("respond with a resource");
// });

// GET users list
router.get("/", function (req, res, next) {
	db(`SELECT * FROM Profiles;`)
		.then((results) => res.send(results.data))
		.catch((err) => res.status(500).send(err));
});

//GET one user Profile
router.get("/:id", function (req, res, next) {
	const { id } = req.params;
	db(`SELECT * FROM Profiles WHERE id=${id};`)
		.then((results) => res.send(results.data[0]))
		.catch((err) => res.status(500).send(err));
});

//GET one user update
router.get("/:id", function (req, res, next) {
	const { id } = req.params;
	db(`SELECT * FROM Updates WHERE profile_id=${id};`)
		.then((results) => res.send(results.data[0]))
		.catch((err) => res.status(500).send(err));
});

module.exports = router;

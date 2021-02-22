var express = require("express");
var router = express.Router();
const db = require("../model/helper");

// // // GET users updates list //CHECKED
router.get("/", function (req, res, next) {
	db(`SELECT * FROM Updates;`)
		.then((results) => res.send(results.data))
		.catch((err) => res.status(500).send(err));
});

// GET the history updates of a user //CHECKED
router.get("/:id", function (req, res, next) {
	const { id } = req.params;
	db(
		`SELECT Profiles.firstname, Profiles.lastname, Updates.* FROM Updates INNER JOIN Profiles ON Profiles.id=Updates.profile_id WHERE Profiles.id="${id}" ORDER BY Updates.id DESC;`
	)
		.then((results) => res.send(results.data))
		.catch((err) => res.status(500).send(err));
});

// //POST client fills the update form //CHECKED
router.post("/", function (req, res, next) {
	const {
		date = "2021-02-19",
		profile_id = 0,
		weight = 0,
		arm = 0,
		weist = 0,
		leg = 0,
		stressLevel = 0,
		sleepHours = 0,
		steps = 0,
		dietCompliment = 0,
		feelings,
		trainingsSummary,
		picFront,
		picBack,
		picSide,
	} = req.body;
	db(
		`INSERT INTO Updates (date, profile_id, weight, arm, weist, leg, stressLevel, sleepHours, steps, dietCompliment, Feelings, trainingsSummary, picFront, picBack, picSide) VALUES ("${date}", "${profile_id}", "${weight}", "${arm}", "${weist}", "${leg}", "${stressLevel}", "${sleepHours}", "${steps}", "${dietCompliment}", "${feelings}", "${trainingsSummary}", "${picFront}", "${picBack}", "${picSide}");`
	)
		.then(() => {
			res.send({ message: "The update form has been sent!" });
		})
		.catch((err) => res.status(500).send(err));
});

// //DELETE if the user asks to delete all his/her data from the database (including the updates). //CHECKED
router.delete("/:id", function (req, res, next) {
	const { id } = req.params;
	db(`DELETE FROM Profiles WHERE Profiles.id="${id}";`)
		.then(() => {
			res.send({
				message: "The client data has been deleted from our database",
			});
		})
		.catch((err) => res.status(500).send(err));
});

module.exports = router;

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
	db(
		`SELECT Profiles.firstname, Profiles.lastname FROM Profiles INNER JOIN Updates ON Profiles.id=Updates.profile_id WHERE Profiles.id=${id}`
	)
		.then((results) => res.send(results.data[0]))
		.catch((err) => res.status(500).send(err));
});

//how to get the historical?

//POST the client fills the InitialForm
router.post("/", function (req, res, next) {
	//your code here
	const {
		date,
		id,
		firstname,
		lastname,
		age,
		email,
		phone,
		job,
		jobHoursPerDay,
		injuries,
		nocieveSubstances,
		suplements,
		rest,
		nightWakeUps,
		sleepEnvironment,
		alergies,
		carbohydratesFeeling,
		prevTrainings,
		objectives,
		availability,
		numTrainingDays,
		squat,
		benchPress,
		deadweight,
		height,
		fat,
		kcal,
		proteins,
		G,
		water,
	} = req.body;
	db(
		`INSERT INTO Profile (date, id, firstname, lastname, age, email, phone, job, jobHoursPerDay, injuries, nocieveSubstances, suplements, rest, nightWakeUps, sleepEnvironment, alergies, carbohydratesFeeling, prevTrainings, objectives, availability, numTrainingDays, squat, benchPress, deadweight, height, fat, kcal, proteins, G, water) VALUES ("${date}", "${id}", "${firstname}", "${lastname}", "${age}", "${email}", "${phone}", "${job}", "${job}", "${jobHoursPerDay}", "${injuries}", "${nocieveSubstances}", "${suplements}", "${rest}", "${nightWakeUps}", "${sleepEnvironment}", "${alergies}"), "${carbohydratesFeeling}", "${prevTrainings}", "${objectives}", "${availability}", "${numTrainingDays}", "${squat}", "${benchPress}", "${deadweight}", "${height}", "${fat}", "${kcal}", "${proteins}", "${G}", "${water}";`
	)
		.then(() => {
			res.send({ message: "El cuestionario se ha enviado correctamente" });
		})
		.catch((err) => res.status(500).send(err));
});
module.exports = router;

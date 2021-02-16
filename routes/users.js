var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET users listing. */
// router.get("/", function (req, res, next) {
// 	res.send("respond with a resource");
// });

// GET users list //CHECKED
// router.get("/", function (req, res, next) {
// 	db(`SELECT * FROM Profiles;`)
// 		.then((results) => res.send(results.data))
// 		.catch((err) => res.status(500).send(err));
// });

//GET one user Profile //CHECKED
// router.get("/:id", function (req, res, next) {
// 	const { id } = req.params;
// 	db(`SELECT * FROM Profiles WHERE id=${id};`)
// 		.then((results) => res.send(results.data[0]))
// 		.catch((err) => res.status(500).send(err));
// });

//GET one user update //CHECKED
// router.get("/:id", function (req, res, next) {
// 	const { id } = req.params;
// 	db(
// 		`SELECT firstname, lastname, profile_id, updates.date, weight, arm, weist, leg, stressLevel, sleepHours, steps, dietCompliment, Feelings, trainingsSummary, picFront, picBack, picSide FROM Profiles INNER JOIN Updates ON Profiles.id=Updates.profile_id WHERE Profiles.id="${id}";`
// 	)
// 		.then((results) => res.send(results.data[0]))
// 		.catch((err) => res.status(500).send(err));
// });

//how to get the historical of 1 user?

//POST the client fills the InitialForm // CHECKED
// router.post("/", function (req, res, next) {
// 	const {
// 		date,
// 		firstname,
// 		lastname,
// 		age,
// 		email,
// 		phone,
// 		job,
// 		jobHoursPerDay,
// 		injuries,
// 		nociveSubstances,
// 		suplements,
// 		rest,
// 		nightWakeUps,
// 		sleepEnvironment,
// 		alergies,
// 		carbohydratesFeeling,
// 		prevTrainings,
// 		objectives,
// 		availability,
// 		numTrainingDays,
// 		squat,
// 		benchPress,
// 		deadweight,
// 		height,
// 		fat,
// 		kcal,
// 		proteins,
// 		G,
// 		water,
// 	} = req.body;
// 	db(
// 		`INSERT INTO Profiles (date, firstname, lastname, age, email, phone, job, jobHoursPerDay, injuries, nociveSubstances, suplements, rest, nightWakeUps, sleepEnvironment, alergies, carbohydratesFeeling, prevTrainings, objectives, availability, numTrainingDays, squat, benchPress, deadweight, height, fat, kcal, proteins, G, water) VALUES ("${date}", "${firstname}", "${lastname}", "${age}", "${email}", "${phone}", "${job}", "${jobHoursPerDay}", "${injuries}", "${nociveSubstances}", "${suplements}", "${rest}", "${nightWakeUps}", "${sleepEnvironment}", "${alergies}", "${carbohydratesFeeling}", "${prevTrainings}", "${objectives}", "${availability}", "${numTrainingDays}", "${squat}", "${benchPress}", "${deadweight}", "${height}", "${fat}", "${kcal}", "${proteins}", "${G}", "${water}");`
// 	)
// 		.then(() => {
// 			res.send({ message: "The form has been sent!" });
// 		})
// 		.catch((err) => res.status(500).send(err));
// });

//POST client fills the update

// router.post("/", function (req, res, next) {
// 	const {
// 		date,
// 		profile_id,
// 		weight,
// 		arm,
// 		weist,
// 		leg,
// 		stressLevel,
// 		sleepHours,
// 		steps,
// 		dietCompliment,
// 		feelings,
// 		trainingsSummary,
// 		picFront,
// 		picBack,
// 		picSide,
// 	} = req.body;
// 	db(
// 		`INSERT INTO Updates (date, profile_id, weight, arm, weist, leg, stressLevel, sleepHours, steps, dietCompliment, Feelings, trainingsSummary, picFront, picBack, picSide) VALUES ("${date}", "${profile_id}", "${weight}", "${arm}", "${weist}", "${leg}", "${stressLevel}", "${sleepHours}", "${steps}", "${dietCompliment}", "${feelings}", "${trainingsSummary}", "${picFront}", "${picBack}", "${picSide}");`
// 	)
// 		.then(() => {
// 			res.send({ message: "The form has been sent!" });
// 		})
// 		.catch((err) => res.status(500).send(err));
// });

//DELETE if the user asks to delete all his/her data from the database
router.delete("/:id", function (req, res, next) {
	const { id } = req.params;
	db(`DELETE FROM Profile WHERE id=${id};`)
		.then(() => {
			res.send({
				message: "The client data has been deleted from our database",
			});
		})
		.catch((err) => res.status(500).send(err));
});

module.exports = router;

// DETAILS USED TO CHECK IF THE ROUTE WAS WORKING
// {
//   "date": "2021-02-16",
//   "Firstname": "Michael",
//   "Lastname": "Jordan",
//   "age": "31",
//   "email": "madeupemail@gmail.com",
//   "phone": "623654789",
//   "job": "basketball player",
//   "jobHoursPerDay": "8",
//   "injuries": "none",
//   "nocieveSubstances": "",
//   "suplements": "none",
//   "rest": "2h",
//   "nightWakeUps": "2",
//   "sleepEnvironment": "quiet",
//   "alergies": "lactose intolerance",
//   "carbohydratesFeeling": "feel sleepy after eating them",
//   "prevTrainings": "spinning",
//   "objectives": "muscle definition",
//   "availability": "from 6pm on",
//   "numTrainingDays": "2",
//   "squat": "no idea",
//   "benchPress": "no idea",
//   "deadweight": "no idea",
//   "height": "198",
//   "fat": "20",
//   "kcal": "2500",
//   "proteins": "15",
//   "G": "5",
//   "water": "2,5"
// }

var express = require("express");
var router = express.Router();
const db = require("../model/helper");

// /* GET users listing. */
// router.get("/", function (req, res, next) {
// 	res.send("respond with a resource");
// });

// // // GET users list //CHECKED
router.get("/", function (req, res, next) {
	db(`SELECT * FROM Profiles;`)
		.then((results) => res.send(results.data))
		.catch((err) => res.status(500).send(err));
});

// // //GET one user Profile //CHECKED
router.get("/:id", function (req, res, next) {
	const { id } = req.params;
	db(`SELECT * FROM Profiles WHERE id=${id};`)
		.then((results) => res.send(results.data[0]))
		.catch((err) => res.status(500).send(err));
});

// //POST the client fills the InitialForm // CHECKED
router.post("/", function (req, res, next) {
	const {
		date = "2021-02-18",
		firstname,
		lastname,
		age = 2001,
		email,
		phone = 0,
		job,
		jobHoursPerDay,
		injuries,
		nociveSubstances,
		suplements,
		rest,
		nightWakeUps = 0,
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
		height = 100,
		fat = 10,
		kcal = 10,
		proteins = 10,
		G = 10,
		ch = 0,
		water = 10,
	} = req.body;
	db(
		`INSERT INTO Profiles (date, firstname, lastname, age, email, phone, job, jobHoursPerDay, injuries, nociveSubstances, suplements, rest, nightWakeUps, sleepEnvironment, alergies, carbohydratesFeeling, prevTrainings, objectives, availability, numTrainingDays, squat, benchPress, deadweight, height, fat, kcal, proteins, G, water) VALUES ("${date}", "${firstname}", "${lastname}", "${age}", "${email}", "${phone}", "${job}", "${jobHoursPerDay}", "${injuries}", "${nociveSubstances}", "${suplements}", "${rest}", "${nightWakeUps}", "${sleepEnvironment}", "${alergies}", "${carbohydratesFeeling}", "${prevTrainings}", "${objectives}", "${availability}", "${numTrainingDays}", "${squat}", "${benchPress}", "${deadweight}", "${height}", "${fat}", "${kcal}", "${proteins}", "${G}", "${water}");`
	)
		.then(() => {
			res.send({ message: "The form has been sent!" });
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

// {
//   "date": "2021-02-16",
//   "profile_id": "2",
//   "weight": "110",
//   "arm": "35",
//   "weist": "100",
//   "leg": "80",
//   "stressLevel": "8",
//   "sleepHours": "8",
//   "steps": "10000",
//   "dietCompliment": "a lot",
//   "feelings": "happy ",
//   "trainingsSummary": "I'm doing well so far",
//   "picFront": "",
//   "picBack": "",
//   "picSide": ""
// }

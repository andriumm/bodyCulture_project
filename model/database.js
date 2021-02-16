require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
	host: DB_HOST || "127.0.0.1",
	user: DB_USER || "root",
	password: DB_PASS,
	database: DB_NAME || "bodyculturebcn",
	multipleStatements: true,
});

con.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");

	let sql =
		"CREATE TABLE Profiles(date DATETIME, id INT NOT NULL AUTO_INCREMENT, Firstname varchar(255) NOT NULL, Lastname varchar(255) NOT NULL, age INT(2), email varchar(255), phone INT(255), injuries varchar(400), nociveSubstances varchar(300), suplements varchar(400), job varchar(255), jobHoursPerDay varchar(255), stressLevel INT(2), rest varchar(300), sleepHours INT(2), nightWakeUps BOOLEAN, sleepEnvironment TEXT, carbohydratesFeeling TEXT, alergies varchar(255), objectives TEXT(500), numTrainingDays varchar(255), availability varchar(500), prevTrainings TEXT, squat varchar(255), benchPress varchar(255), deadweight varchar(255), height INT(255), weight INT(255), fat INT(255), kcal INT(255), proteins INT(255), G INT(255), steps INT(255), water varchar(255), pictureFront blob, pictureBack blob, pictureSide blob, PRIMARY KEY (id)); CREATE TABLE Updates ( id INT, date DATETIME, weight INT, prevWeist INT, currentWeist INT, prevArm INT, currentArm INT, prevLeg INT, currentLeg INT, stressLevel INT, sleepHours INT, steps INT, dietCompliment INT, Feelings TEXT, trainingsSummary TEXT, picUpdateFront BLOB, picUpdateBack BLOB, picUpdateSide BLOB, PRIMARY KEY (id));";

	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table creation Profiles and Updats was successful!");

		console.log("Closing...");
	});

	con.end();
});

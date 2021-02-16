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
		"CREATE TABLE  Profiles  ( date  DATE, id  INT NOT NULL AUTO_INCREMENT, Firstname  varchar(255) NOT NULL, Lastname  varchar(255) NOT NULL, age  INT(2), email  varchar(255), phone  INT(255), job  varchar(255), jobHoursPerDay  varchar(255), injuries  varchar(400), nociveSubstances  varchar(300), suplements  varchar(400), rest  varchar(300), nightWakeUps  BOOLEAN, sleepEnvironment  TEXT, alergies  varchar(255), carbohydratesFeeling  TEXT, prevTrainings  TEXT, objectives  TEXT(500), availability  varchar(500), numTrainingDays  varchar(255), squat  varchar(255), benchPress  varchar(255), deadweight  varchar(255), height  INT(255), fat  INT(255), kcal  INT(255), proteins  INT(255), G  INT(255), water  varchar(255),PRIMARY KEY ( id )); CREATE TABLE  Updates  ( date  DATE NOT NULL, id  INT NOT NULL AUTO_INCREMENT, profile_id  INT NOT NULL, weight  INT, arm  INT, weist  INT, leg  INT, stressLevel  INT, sleepHours  INT, steps  INT, dietCompliment  INT, Feelings  TEXT, trainingsSummary  TEXT, picFront  blob, picBack  blob, picSide  blob,PRIMARY KEY ( id )); ALTER TABLE  Updates  ADD CONSTRAINT  Updates_fk0  FOREIGN KEY ( profile_id ) REFERENCES  Profiles ( id );";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table creation 'Profiles' and 'Updates' was successful!");

		console.log("Closing...");
	});

	con.end();
});

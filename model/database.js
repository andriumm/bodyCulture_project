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
	database: DB_NAME || "facebook",
	multipleStatements: true,
});

con.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");

	let sql = `CREATE TABLE "Profiles" (
      "date" DATETIME(6) NOT NULL,
      "id" INT NOT NULL AUTO_INCREMENT,
      "Firstname" varchar(255) NOT NULL,
      "Lastname" varchar(255) NOT NULL,
      "age" INT(2) NOT NULL,
      "email" varchar(255) NOT NULL,
      "phone" INT(255) NOT NULL,
      "injuries" varchar(400) NOT NULL,
      "nociveSubstances" varchar(300) NOT NULL,
      "suplements" varchar(400) NOT NULL,
      "job" varchar(255) NOT NULL,
      "jobHoursPerDay" varchar(255) NOT NULL,
      "stressLevel" INT(2) NOT NULL,
      "rest" varchar(300) NOT NULL,
      "sleepHours" INT(2) NOT NULL,
      "nightWakeUps" BOOLEAN NOT NULL,
      "sleepEnvironment" TEXT NOT NULL,
      "carbohydratesFeeling" TEXT NOT NULL,
      "alergies" varchar(255) NOT NULL,
      "objectives" TEXT(500) NOT NULL,
      "numTrainingDays" varchar(255) NOT NULL,
      "availability" varchar(500) NOT NULL,
      "prevTrainings" TEXT NOT NULL,
      "squat" varchar(255) NOT NULL,
      "benchPress" varchar(255) NOT NULL,
      "deadweight" varchar(255) NOT NULL,
      "height" INT(255) NOT NULL,
      "weight" INT(255) NOT NULL,
      "fat" INT(255) NOT NULL,
      "kcal" INT(255) NOT NULL,
      "proteins" INT(255) NOT NULL,
      "G" INT(255) NOT NULL,
      "steps" INT(255) NOT NULL,
      "water" varchar(255) NOT NULL,
      "pictureFront" blob,
      "pictureBack" blob,
      "pictureSide" blob,
      PRIMARY KEY ("id")
    );
    
    CREATE TABLE "Updates" (
      "id" INT NOT NULL,
      "date" DATETIME NOT NULL,
      "weight" INT NOT NULL,
      "prevWeist" INT NOT NULL,
      "currentWeist" INT NOT NULL,
      "prevArm" INT NOT NULL,
      "currentArm" INT NOT NULL,
      "prevLeg" INT NOT NULL,
      "currentLeg" INT NOT NULL,
      "stressLevel" INT NOT NULL,
      "sleepHours" INT NOT NULL,
      "steps" INT NOT NULL,
      "dietCompliment" INT NOT NULL,
      "Feelings" TEXT NOT NULL,
      "trainingsSummary" TEXT NOT NULL,
      PRIMARY KEY ("id")
    );`;

	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Table creation `Profiles` and `Updats` was successful!");

		console.log("Closing...");
	});

	con.end();
});

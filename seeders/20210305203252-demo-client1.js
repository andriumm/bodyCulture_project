"use strict";

module.exports = {
	up: async function (queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Profiles",
			[
				{
					firstname: "Michael",
					lastname: "Jordan",
					birth: "1963",
					email: "m.jordan@gmail.com",
					phone: "612345678",
					job: "Basketball Player",
					jobHoursPerDay: 8,
					injuries: "Knee",
					nociveSubstances: "None",
					suplements: "Proteins",
					rest: "Good",
					nightWakeUps: "2-3",
					sleepEnvironment: "Quiet",
					alergies: "None",
					carbohydratesFeeling: "Sleepy",
					prevTrainings: "elite trainings",
					objectives: "Maintenance",
					availability: "From 6pm on",
					numTrainingDays: "2",
					squat: 50,
					benchPress: 50,
					deadweight: 50,
					height: 198,
					fat: 25,
					kcal: 2000,
					proteins: 15,
					g: 15,
					ch: 15,
					water: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async function (queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Profiles", null, {});
	},
};

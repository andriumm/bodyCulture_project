("use strict");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Profiles",
			[
				{
					user_id: 2,
					birth: "1986",
					job: "Singer",
					jobHoursPerDay: 7,
					injuries: "Broken leg 5 years ago",
					nociveSubstances: "Tabacco",
					suplements: "Spirulina",
					rest: "not much",
					nightWakeUps: "4",
					sleepEnvironment: "Quiet",
					alergies: "Lactose intolerance",
					carbohydratesFeeling: "Any effect",
					prevTrainings: "cardiobox",
					objectives: "Muscle definition",
					availability: "From 5.30pm on",
					numTrainingDays: "1",
					squat: 10,
					benchPress: 5,
					deadweight: 10,
					height: 155,
					fat: 21,
					kcal: 1800,
					proteins: 10,
					g: 10,
					ch: 10,
					water: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Profiles", null, {});
	},
};

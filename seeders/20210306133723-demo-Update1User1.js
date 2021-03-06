"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Updates",
			[
				{
					user_id: 1,
					profile_id: 1,
					weight: 100,
					arm: 28,
					weist: 120,
					leg: 50,
					stressLevel: 2,
					sleepHours: 8,
					steps: 10000,
					dietCompliment: 4,
					feelings: "Motivated",
					trainingsSummary: "I'm able to more difficulty",
					picFront: "",
					picBack: "",
					picSide: "",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Updates", null, {});
	},
};

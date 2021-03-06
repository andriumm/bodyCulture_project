"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Updates",
			[
				{
					user_id: 2,
					profile_id: 2,
					weight: 48,
					arm: 18,
					weist: 80,
					leg: 30,
					stressLevel: 5,
					sleepHours: 7,
					steps: 8000,
					dietCompliment: 5,
					feelings: "I feel is a little bit hard",
					trainingsSummary: "I finish too tired",
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

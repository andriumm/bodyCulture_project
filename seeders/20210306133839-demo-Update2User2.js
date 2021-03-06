"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Updates",
			[
				{
					profile_id: 2,
					weight: 100,
					arm: 28,
					weist: 120,
					leg: 50,
					stressLevel: 2,
					sleepHours: 8,
					steps: 10000,
					dietCompliment: 4,
					feelings: "A little bit better",
					trainingsSummary: "I feel better handle legs exercices",
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

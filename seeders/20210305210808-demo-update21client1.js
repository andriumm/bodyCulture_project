"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Updates",
			[
				{
					profile_id: 1,
					weight: 98,
					arm: 26,
					weist: 119,
					leg: 50,
					stressLevel: 2,
					sleepHours: 8,
					steps: 12000,
					dietCompliment: 5,
					feelings: "Still motivated",
					trainingsSummary: "Feeling good while training",
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

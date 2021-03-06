"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Updates", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			user_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			profile_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			weight: { type: Sequelize.INTEGER },
			arm: { type: Sequelize.INTEGER },
			weist: { type: Sequelize.INTEGER },
			leg: { type: Sequelize.INTEGER },
			stressLevel: { type: Sequelize.INTEGER },
			sleepHours: { type: Sequelize.INTEGER },
			steps: { type: Sequelize.INTEGER },
			dietCompliment: { type: Sequelize.INTEGER },
			feelings: { type: Sequelize.STRING },
			trainingsSummary: { type: Sequelize.STRING },
			picFront: { type: Sequelize.STRING },
			picBack: { type: Sequelize.STRING },
			picSide: { type: Sequelize.STRING },
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Updates");
	},
};

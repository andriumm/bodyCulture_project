"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Profiles", {
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
			birth: {
				type: Sequelize.INTEGER,
			},
			job: { type: Sequelize.STRING },
			jobHoursPerDay: { type: Sequelize.INTEGER },
			injuries: { type: Sequelize.STRING },
			nociveSubstances: { type: Sequelize.STRING },
			suplements: { type: Sequelize.STRING },
			rest: { type: Sequelize.STRING },
			nightWakeUps: { type: Sequelize.INTEGER },
			sleepEnvironment: { type: Sequelize.STRING },
			alergies: { type: Sequelize.STRING },
			carbohydratesFeeling: { type: Sequelize.STRING },
			prevTrainings: { type: Sequelize.STRING },
			objectives: { type: Sequelize.STRING },
			availability: { type: Sequelize.STRING },
			numTrainingDays: { type: Sequelize.STRING },
			squat: { type: Sequelize.STRING },
			benchPress: { type: Sequelize.STRING },
			deadweight: { type: Sequelize.STRING },
			height: { type: Sequelize.INTEGER },
			fat: { type: Sequelize.INTEGER },
			kcal: { type: Sequelize.INTEGER },
			proteins: { type: Sequelize.INTEGER },
			g: { type: Sequelize.INTEGER },
			ch: { type: Sequelize.INTEGER },
			water: { type: Sequelize.INTEGER },
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
		await queryInterface.dropTable("Profiles");
	},
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Updates extends Model {
		static associate(models) {
			Updates.belongsTo(models.Users, { foreignKey: "user_id" });
			Updates.belongsTo(models.Profiles, { foreignKey: "profile_id" });
		}
	}
	Updates.init(
		{
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
		},
		{
			sequelize,
			modelName: "Updates",
		}
	);
	return Updates;
};

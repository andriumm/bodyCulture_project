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
				type: DataTypes.INTEGER,
			},
			profile_id: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			weight: { type: DataTypes.INTEGER },
			arm: { type: DataTypes.INTEGER },
			weist: { type: DataTypes.INTEGER },
			leg: { type: DataTypes.INTEGER },
			stressLevel: { type: DataTypes.INTEGER },
			sleepHours: { type: DataTypes.INTEGER },
			steps: { type: DataTypes.INTEGER },
			dietCompliment: { type: DataTypes.INTEGER },
			feelings: { type: DataTypes.STRING },
			trainingsSummary: { type: DataTypes.STRING },
			picFront: { type: DataTypes.STRING },
			picBack: { type: DataTypes.STRING },
			picSide: { type: DataTypes.STRING },
			createdAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
		},
		{
			sequelize,
			modelName: "Updates",
		}
	);
	return Updates;
};

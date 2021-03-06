"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Profiles extends Model {
		static associate(models) {
			Profiles.hasMany(models.Updates, { foreignKey: "profile_id" });
			Profiles.belongsTo(models.Users, { foreignKey: "user_id" });
		}
	}
	Profiles.init(
		{
			user_id: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			birth: {
				type: DataTypes.INTEGER,
			},
			job: { type: DataTypes.STRING },
			jobHoursPerDay: { type: DataTypes.INTEGER },
			injuries: { type: DataTypes.STRING },
			nociveSubstances: { type: DataTypes.STRING },
			suplements: { type: DataTypes.STRING },
			rest: { type: DataTypes.STRING },
			nightWakeUps: { type: DataTypes.INTEGER },
			sleepEnvironment: { type: DataTypes.STRING },
			alergies: { type: DataTypes.STRING },
			carbohydratesFeeling: { type: DataTypes.STRING },
			prevTrainings: { type: DataTypes.STRING },
			objectives: { type: DataTypes.STRING },
			availability: { type: DataTypes.STRING },
			numTrainingDays: { type: DataTypes.STRING },
			squat: { type: DataTypes.STRING },
			benchPress: { type: DataTypes.STRING },
			deadweight: { type: DataTypes.STRING },
			height: { type: DataTypes.INTEGER },
			fat: { type: DataTypes.INTEGER },
			kcal: { type: DataTypes.INTEGER },
			proteins: { type: DataTypes.INTEGER },
			g: { type: DataTypes.INTEGER },
			ch: { type: DataTypes.INTEGER },
			water: { type: DataTypes.INTEGER },
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
			modelName: "Profiles",
		}
	);
	return Profiles;
};

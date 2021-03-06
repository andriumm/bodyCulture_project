"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const supersecret = process.env.SUPER_SECRET;
module.exports = (sequelize, DataTypes) => {
	class Users extends Model {
		static associate(models) {
			Users.hasOne(models.Profiles, { foreignKey: "user_id" });
			Users.hasMany(models.Updates, { foreignKey: "user_id" });
		}
	}
	Users.init(
		{
			firstname: { type: DataTypes.STRING, allowNull: false },
			lastname: { type: DataTypes.STRING, allowNull: false },
			phone: { type: DataTypes.INTEGER, allowNull: false },
			email: { type: DataTypes.STRING, allowNull: false },
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				set(value) {
					const hash = bcrypt.hashSync(value, saltRounds);
					this.setDataValue("password", hash);
				},
			},
		},
		{
			sequelize,
			modelName: "Users",
		}
	);
	return Users;
};

// user_id: {
// 	allowNull: false,
// 	type: DataTypes.INTEGER,
// },
// birth: {
// 	type: DataTypes.INTEGER,
// },
// job: { type: DataTypes.STRING },
// jobHoursPerDay: { type: DataTypes.INTEGER },
// injuries: { type: DataTypes.STRING },
// nocivesubstances: { type: DataTypes.STRING },
// suplements: { type: DataTypes.STRING },
// rest: { type: DataTypes.STRING },
// nightWakeUps: { type: DataTypes.INTEGER },
// sleepEnvironment: { type: DataTypes.STRING },
// alergies: { type: DataTypes.STRING },
// carbohydratesFeeling: { type: DataTypes.STRING },
// prevTrainings: { type: DataTypes.STRING },
// objectives: { type: DataTypes.STRING },
// availability: { type: DataTypes.STRING },
// numTrainingDays: { type: DataTypes.STRING },
// squat: { type: DataTypes.STRING },
// benchPres: { type: DataTypes.STRING },
// deadweight: { type: DataTypes.STRING },
// height: { type: DataTypes.INTEGER },
// fat: { type: DataTypes.INTEGER },
// kcal: { type: DataTypes.INTEGER },
// proteins: { type: DataTypes.INTEGER },
// g: { type: DataTypes.INTEGER },
// ch: { type: DataTypes.INTEGER },
// water: { type: DataTypes.INTEGER },
// createdAt: {
// 	allowNull: false,
// 	type: DataTypes.DATE,
// },
// updatedAt: {
// 	allowNull: false,
// 	type: DataTypes.DATE,
// },

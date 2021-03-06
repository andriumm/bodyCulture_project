"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Users extends Model {
		static associate(models) {
			Users.hasOne(models.Profiles, { foreignKey: "user_id" });
			Users.hasMany(models.Updates, { foreignKey: "user_id" });
		}
	}
	Users.init(
		{
			name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Users",
		}
	);
	return Users;
};

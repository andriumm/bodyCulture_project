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
			name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Profiles",
		}
	);
	return Profiles;
};

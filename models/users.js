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

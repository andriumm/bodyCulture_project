"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Updates extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Updates.belongsTo(models.Users, { foreignKey: "user_id" });
			Updates.belongsTo(models.Profiles, { foreignKey: "profile_id" });
		}
	}
	Updates.init(
		{
			name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Updates",
		}
	);
	return Updates;
};

"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.renameColumn("profiles", "age", "birth");
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.renameColumn("profiles", "age", "birth");
	},
};

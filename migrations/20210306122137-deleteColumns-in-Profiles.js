"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn("profiles", "firstname");
		await queryInterface.removeColumn("profiles", "lastname");
		await queryInterface.removeColumn("profiles", "phone");
		await queryInterface.removeColumn("profiles", "email");
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn("profiles", "firstname");
		await queryInterface.removeColumn("profiles", "lastname");
		await queryInterface.removeColumn("profiles", "phone");
		await queryInterface.removeColumn("profiles", "email");
	},
};

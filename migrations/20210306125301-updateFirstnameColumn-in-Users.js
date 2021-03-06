"use strict";

const { STRING } = require("sequelize");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.changeColumn("users", "firstname", Sequelize.STRING, {
			allowNull: false,
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.changeColumn("users", "firstname", Sequelize.STRING, {
			allowNull: false,
		});
	},
};

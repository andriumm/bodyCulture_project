"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Users",
			[
				{
					firstname: "Michael",
					lastname: "Jordan",
					email: "m.jordan@gmail.com",
					phone: "612345678",
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Users", null, {});
	},
};

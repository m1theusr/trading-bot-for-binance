'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
      queryInterface.addColumn("settings", "streamUrl", {
        type: Sequelize.STRING
      })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("settings", "streamUrl");
  }
};

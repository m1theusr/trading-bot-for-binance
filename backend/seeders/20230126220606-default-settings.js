'use strict';
require('dotenv').config();
const bcrypt = require('bcryptjs');
const crypto = require('../src/utils/crypto');



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const settingsId = await queryInterface.rawSelect('settings', { where: {}, limit: 1 }, ['id']);
    if (!settingsId) {
      return queryInterface.bulkInsert('settings', [{
        email: 'm@gmail.com',
        password: bcrypt.hashSync('M1theuss'),
        apiUrl: 'https://testnet.binance.vision/api',
        streamUrl: 'wss://ws-api.testnet.binance.vision/ws-api/v3',
        accessKey: 'GQE6F65YD3k3ho5pTZPKUtSXD8YkRCmctCDtmd6VhuHNIMu2uAmMXx4jBYjzcPk9',
        secretKey: crypto.encrypt('wKLvZmlqUFR6SJpSq5ffrHFnVXKVk5909ZD6ByQWP0xzaM31ff76hXBNkCb8egnb'),
        createdAt: new Date(),
        updatedAt: new Date()

      }])
    }
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('settings', null, {});
  }

}

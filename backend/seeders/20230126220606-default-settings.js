'use strict';
require('dotenv').config();
const bcrypt = require('bcryptjs');
const crypto = require ('../src/utils/crypto');



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('settings', [{
        email: 'matheus@gmail.com',
        password: bcrypt.hashSync('M1theuss'),
        apiUrl: 'https://testenet.binance.vision/api/',
        accessKey: 'qPXoVwTGzyyBZ0WK7TXyEG35ucHrdGrP0TtXA1JYTPjr2jjurFZdxp6e1auAPHSe',
        secretKey: crypto.encrypt('4PyBM0h42f8au8osbGD03C1kHc6OCKMN0EMYa3yLDTuDRnkhA5WrieKpFdVthvSX'),
        createdAt: new Date(),
        updatedAt: new Date()

    }])

  },

  down: async (queryInterface, Sequelize) =>{
      return queryInterface.bulkDelete ('settings', null, {});
}

}

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const symbol = await queryInterface.rawSelect('symbols', { where: {}, limit: 1 }, ['id']);
    if (!symbol) {
      return queryInterface.bulkInsert('symbols', [{
        symbol: 'BTCBUSD',
      basePrecision: 8,
      quotePrecision: 8,
      minNotional: '0.1',
      minLoteSize:  '0.1',
      isFavorite: true, 
      CreatedAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
      }])
    }
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('symbols', null, {});
  }

}

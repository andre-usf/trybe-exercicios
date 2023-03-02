'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Books', [
      {
        title: 'Cosmos',
        author: 'Carl Sagan',
        pageQuantity: 560,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Código limpo: Habilidades práticas do Agile Software',
        author: 'Robert C. Martin',
        pageQuantity: 425,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
     ], {});

  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Books', null, {});

  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('styles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      style: {
        type: Sequelize.STRING
      },
      range: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('styles');
  }
};

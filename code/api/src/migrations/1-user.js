// This file manages the attributes of a User resource, we will neef to add a "style preference" attribute to this migration
// in order to save the user's style preference to their particular resource.

module.exports = {
  // Sets table up
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.TEXT
      },
      role: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  // Tears table down
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
}

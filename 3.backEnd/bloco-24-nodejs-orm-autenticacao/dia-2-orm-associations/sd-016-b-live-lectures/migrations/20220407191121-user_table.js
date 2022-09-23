'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false
      },
      email: {
        type: Sequelize.STRING, 
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING, 
        allowNull: false,
      }, 
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE, 
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE, 
        defaultValue: new Date()
      }
    });
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('users');
  }
};

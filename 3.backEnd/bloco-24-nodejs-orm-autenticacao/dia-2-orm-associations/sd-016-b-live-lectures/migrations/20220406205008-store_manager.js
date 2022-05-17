'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // await queryInterface.sequelize.query(`CREATE TABLE products (
    //   id INT NOT NULL auto_increment,
    //   name VARCHAR(30) NOT NULL,
    //   quantity INT NOT NULL,
    //   PRIMARY KEY(id)
    // ) ENGINE=INNODB;
    // `); 
    
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER, 
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(`products`);
  }
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`CREATE TABLE sales (
      id INT NOT NULL auto_increment,
      date DATETIME DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY(id)
    ) ENGINE=INNODB;
  `);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`DROP TABLE sales`);
  }
};

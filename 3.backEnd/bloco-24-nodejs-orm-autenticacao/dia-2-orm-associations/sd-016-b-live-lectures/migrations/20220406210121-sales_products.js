'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`CREATE TABLE sales_products (
      sale_id INT NOT NULL,
      product_id INT NOT NULL,
      quantity INT NOT NULL,
      FOREIGN KEY (sale_id)
          REFERENCES sales (id)
          ON DELETE CASCADE,
      FOREIGN KEY (product_id)
          REFERENCES products (id)
          ON DELETE CASCADE
  )  ENGINE=INNODB;
    `);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`DROP TABLE sales_products`);
  }
};

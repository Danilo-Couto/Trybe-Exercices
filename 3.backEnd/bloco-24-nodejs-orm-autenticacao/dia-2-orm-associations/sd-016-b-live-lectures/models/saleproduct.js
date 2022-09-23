module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: {
      type: DataTypes.INTEGER,
      field: 'sale_id'
    },
    productId: {
      type: DataTypes.INTEGER,
      field: 'product_id'
    }
  }, { timestamps: false, tableName: 'sales_products' });
  
  SaleProduct.removeAttribute('id');

  return SaleProduct;
};
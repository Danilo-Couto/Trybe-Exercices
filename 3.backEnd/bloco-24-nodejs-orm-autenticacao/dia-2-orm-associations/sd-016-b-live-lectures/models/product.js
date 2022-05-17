module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, { timestamps: false });

  Product.associate = (model) => {
    Product.belongsTo(model.User, { as: 'user', foreignKey: 'userId'})
  }

  return Product;
};
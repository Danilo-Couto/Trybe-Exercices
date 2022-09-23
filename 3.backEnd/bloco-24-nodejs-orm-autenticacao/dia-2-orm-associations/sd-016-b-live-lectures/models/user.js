module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    password: {
      type: DataTypes.STRING, 
      allowNull: false
    }
  });

  User.associate = (model) => {
    User.hasMany(model.Product, { as: 'products', foreignKey: 'userId' })
  }

  return User;
};
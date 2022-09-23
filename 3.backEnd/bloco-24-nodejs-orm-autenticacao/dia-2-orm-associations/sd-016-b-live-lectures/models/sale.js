module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', { 
    date: {
      type: DataTypes.DATE
    }
  }, { timestamps: false });

  return Sale;
};
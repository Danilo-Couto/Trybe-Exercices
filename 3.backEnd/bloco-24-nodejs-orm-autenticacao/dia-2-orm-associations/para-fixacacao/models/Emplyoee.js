// models/Employee.js
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'Employees',
    underscored: true,
  });

  Employee.associate = (models) => {
    Employee.hasMany(models.Address,
      { foreignKey: 'employee_id', as: 'addresses' }); // No model addresses , por sua vez, não há necessidade de alterarmos nada, pois cada address continua pertencendo a apenas um employee , o que justifica o uso do método belongsTo .
  };
  return Employee;
};
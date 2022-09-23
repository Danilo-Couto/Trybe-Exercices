const { Product, SaleProduct, Sale } = require('./models');

(async () => {
  try {
    const products = await Product.findAll();
    const sales = await Sale.findAll();
    const cart = await SaleProduct.findAll();

    console.log(products)

    // const p = await Product.create({ name: 'Dolly guarana', quantity: 2});

    // console.log(p);

    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})()


const sequelize = new Sequelize('storemanager', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

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

// const Sale = sequelize.define('Sale', { 
//   date: {
//     type: DataTypes.DATE
//   }
// }, { timestamps: false });

// const SaleProduct = sequelize.define('SaleProduct', {
//   saleId: {
//     type: DataTypes.INTEGER,
//     field: 'sale_id'
//   },
//   productId: {
//     type: DataTypes.INTEGER,
//     field: 'product_id'
//   }
// }, { timestamps: false, tableName: 'sales_products' });

// SaleProduct.removeAttribute('id');
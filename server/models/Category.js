const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const Product = require('./Product');
const Value = require('./Value');

const Category = sequelize.define('category', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

Category.hasOne(Category, { as: 'supercategory', foreignKey: 'id', foreignKeyConstraint: true });
Category.hasMany(Category, { as: 'subcategories' });
Category.hasMany(Product, { as: 'products' });
Category.hasMany(Value, { as: 'values' });

module.exports = Category;

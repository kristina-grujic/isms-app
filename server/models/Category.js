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
    unique: true,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

Category.hasOne(sequelize.models.category, { as: 'supercategory' });
Category.hasMany(sequelize.models.category, { as: 'subcategories' });
Category.hasMany(sequelize.models.product, { as: 'products' });
Category.hasMany(sequelize.models.value, { as: 'values' });

Product.belongsTo(sequelize.models.category);
Value.belongsTo(sequelize.models.category);

module.exports = Category;

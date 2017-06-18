const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const Category = require('./Category');

const Value = sequelize.define('value', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    required: true,
  },
  vtype: {
    type: Sequelize.STRING,
    required: true,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  values: {
    type: Sequelize.STRING,
    allowNull: false,
    get: function getValues() {
      return this.getDataValue('values').split(';');
    },
    set: function setValues(val) {
      return this.setDataValue('values', val.join(';'));
    },
  },
});

Value.belongsTo(Category);

module.exports = Value;

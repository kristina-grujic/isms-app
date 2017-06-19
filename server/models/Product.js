const Sequelize = require('sequelize');
const { keys } = require('lodash');
const sequelize = require('../config/sequelize');

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    required: true,
  },
  description: {
    type: Sequelize.TEXT,
  },
  highlight: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  values: {
    type: Sequelize.STRING,
    allowNull: false,
    get: function getValues() {
      const values = this.getDataValue('values').split(';');
      const valueObject = {};
      values.map((value) => {
        value = value.split(':');
        valueObject[value[0]] = value[1];
        return value;
      });
      return valueObject;
    },
    set: function setValues(val) {
      const values = [];
      keys(val).map((value) => {
        value = `${value}:${val[value]}`;
        values.push(value);
        return value;
      });
      this.setDataValue('values', values.join(';'));
    },
  },
});

module.exports = Product;

const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Admin = sequelize.define('admin', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    required: true,
  },
  password: {
    type: Sequelize.STRING,
    required: true,
  },
  user_type: {
    type: Sequelize.STRING,
    defaultValue: 'admin',
    get: function getType() {
      return 'admin';
    },
    set: function setValues() {
    }
  },
});

module.exports = Admin;

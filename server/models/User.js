const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    required: true,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    required: true,
  },
  password: {
    type: Sequelize.STRING,
    required: true,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  user_type: {
    type: Sequelize.STRING,
    defaultValue: 'user',
    get: function getType() {
      return 'user';
    },
    set: function setValues() {
    }
  }
});

module.exports = User;

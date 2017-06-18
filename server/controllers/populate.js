const Admin = require('../models/Admin');
const bcrypt = require('bcrypt-nodejs');

exports.index = (req, res) => {
  const admin = {
    name: 'admin',
    username: 'admin',
    password: bcrypt.hashSync('admin'),
  };
  Admin.create(admin)
    .then(() => res.status(200).json({ success: 'Populate successful' }))
    .catch(error => res.status(200).json({ error }));
};

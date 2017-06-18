const Admin = require('../models/Admin');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jwt-simple');
const secret = require('../config/secrets').secret;

exports.login = (req, res) => {
  const body = req.body;
  if (!body.username || !body.password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }
  Admin.findOne({
    where: {
      username: body.username,
    },
    raw: true,
  })
    .then((data) => {
      if (data) {
        const success = bcrypt.compareSync(body.password, data.password);
        if (success) {
          const token = jwt.encode(data, secret);
          delete data.password;
          return res.status(200).json({ token: `JWT ${token}`, data });
        }
      }
      return res.status(401).json({ error: 'Invalid username or password' });
    })
    .catch(error => res.status(500).json({ error }));
};

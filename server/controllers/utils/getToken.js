const jwt = require('jwt-simple');
const secret = require('../../config/secrets').secret;

function getDecodedToken(headers) {
  if (headers && headers.authorization) {
    const parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      const decoded = jwt.decode(parted[1], secret);
      return decoded;
    }
    return null;
  }
  return null;
}

module.exports = getDecodedToken;

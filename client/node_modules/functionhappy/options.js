var path = require('path');
var pkg = require('./package.json');

module.exports = {
  cmd: 'functionhappy',
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  tagline: 'Function Happy - semistandard without space before function paren',
  eslint: require('eslint'),
  eslintConfig: {
    configFile: path.join(__dirname, 'eslintrc.json')
  },
  formatter: null
};

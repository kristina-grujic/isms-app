var test = require('tape');
var eslint = require('eslint');
var path = require('path');

var linter = new eslint.CLIEngine({
  configFile: path.join(__dirname, './', 'eslintrc.json')
});

test('throw with space before function paren', function(t) {
  var result = linter.executeOnText('function myFoo () { return \'foo\'; }\nmyFoo();\n');
  
  t.equals(result.results[0].messages[0].message, 'Unexpected space before function parentheses.')
  t.end();
});
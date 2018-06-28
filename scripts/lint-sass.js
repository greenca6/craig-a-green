const sassLint = require('sass-lint');
const sourceDir = require('./config/paths').SRC;


const results = sassLint.lintFiles(`${sourceDir}/**/*.scss`, {}, require.resolve('../config/sass-lint/.sasslintrc'));
console.log(sassLint.format(results));


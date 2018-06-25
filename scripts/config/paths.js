const path = require('path');

const workingDir = process.cwd();

module.exports = {
  DIST_DIR: path.resolve(workingDir, 'dist'),
  INDEX_JS: path.resolve(workingDir, 'src/index.jsx'),
  INDEX_HTML: path.resolve(workingDir, 'src/index.html'),
};

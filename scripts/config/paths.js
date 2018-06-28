const path = require('path');
const fs = require('fs');

const APP_ROOT = fs.realpathSync(process.cwd());

module.exports = {
  APP_ROOT,
  BUILD_DIR: path.resolve(APP_ROOT, 'dist'),
  DOT_ENV: path.resolve(APP_ROOT, '.env'),
  E2E_DIR: path.resolve(APP_ROOT, 'e2e'),
  INDEX_EJS: path.resolve(APP_ROOT, 'src/index.ejs'),
  INDEX_JSX: path.resolve(APP_ROOT, 'src/index.jsx'),
  INDEX_SCSS: path.resolve(APP_ROOT, 'src/index.scss'),
  NODE_MODULES: path.resolve(APP_ROOT, 'node_modules'),
  PACKAGE_JSON: path.resolve(APP_ROOT, 'package.json'),
  SRC: path.resolve(APP_ROOT, 'src'),
};

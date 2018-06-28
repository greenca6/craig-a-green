const CLIEngine = require('eslint').CLIEngine;
const path = require('path');
const APP_PATHS = require('./config/paths');


const lintDir = path.resolve(APP_PATHS.APP_ROOT);
  const cli = new CLIEngine({
    configFile: require.resolve('../config/eslint/.eslintrc'),
    ignorePattern: [
      'node_modules/',
      'coverage/',
      `${path.basename(APP_PATHS.BUILD_DIR)}/`,
      'docs/',
      'static/',
      'posts/',
    ],
    // fix: args.indexOf('--fix') > -1,
  });
  const formatter = cli.getFormatter();
  const report = cli.executeOnFiles([`${lintDir}/**/*.js`, `${lintDir}/**/*.jsx`]);

  // Write the fixes to disk
  if (args.indexOf('--fix') > -1) {
    CLIEngine.outputFixes(report);
  }


const fs = require('fs');
const path = require('path');

class JestConfig {
  static getUserExtensions(appPaths) {
    if (fs.existsSync(appPaths.CONFIG_FILE)) {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      return require(appPaths.CONFIG_FILE).jest;
    }
    return null;
  }

  static create(appPaths) {
    const userExtensions = this.getUserExtensions(appPaths);

    const config = {
      moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|pdf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': path.resolve(__dirname, '_assetsTransformer.js'),
        '\\.(css|less|scss)$': path.resolve(__dirname, '_assetsTransformer.js'),
      },
      testRegex: '.*(.spec.|.test.)(js|jsx)$',
      setupFiles: [
        path.resolve(__dirname, '../polyfills/index.js'),
        path.resolve(__dirname, '_enzymeAdapterSetup.js'),
      ],
      transform: {
        '^.+\\.(js|jsx)$': path.resolve(__dirname, '_babelTransformer.js'),
      },
      snapshotSerializers: [
        'enzyme-to-json/serializer',
      ],
      coverageReporters: [
        'json',
        'text',
        'lcov',
      ],
      testResultsProcessor: 'jest-sonar-reporter',
      collectCoverageFrom: [
        '**/*.{js,jsx}',
        `!${path.basename(appPaths.BUILD_DIR)}/**/*`,
        `!${path.basename(appPaths.E2E_DIR)}/**/*`,
        '!**/*index.{js,jsx}',
        '!**/*.example.{js,jsx}',
        '!**/*.spec.{js,jsx}',
        '!**/*.test.{js,jsx}',
        '!__tests__/**/*',
        '!**/*/__tests__/**/*',
        '!coverage/**/*',
        '!**/*/__mocks__/**/*',
        '!__mocks__/**/*',
        `!${path.basename(appPaths.CONFIG_FILE)}`,
      ],
      transformIgnorePatterns: [
        '/node_modules/(?!(@pecos)/).*/',
      ],
    };

    if (userExtensions) {
      Object.assign(config, userExtensions);
    }

    return config;
  }
}

module.exports = JestConfig;

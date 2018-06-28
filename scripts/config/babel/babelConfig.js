class BabelConfig {
  static create(nodeEnv) {
    const config = {
      presets: [
        require.resolve('babel-preset-es2015'),
        require.resolve('babel-preset-react'),
        require.resolve('babel-preset-stage-3'),
      ],
      plugins: [
        require.resolve('babel-plugin-transform-react-jsx-source'),
        require.resolve('babel-plugin-transform-class-properties'),
      ],
    };

    // Various plugins for performance optimization
    if (nodeEnv === 'production') {
      config.plugins.push(
        // https://babeljs.io/docs/plugins/transform-react-constant-elements/
        require.resolve('babel-plugin-transform-react-constant-elements'),
        // https://www.npmjs.com/package/babel-plugin-transform-react-remove-prop-types
        require.resolve('babel-plugin-transform-react-remove-prop-types'),
      );
    }

    return config;
  }
}

module.exports = BabelConfig;

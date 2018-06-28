const autoprefixer = require('autoprefixer');
const BabelConfig = require('../babel/babelConfig');


function getWebpackRules(nodeEnv) {
  const babelConfig = BabelConfig.create(nodeEnv);

  const rules = [
    {
      enforce: 'pre',
      test: /\.(jsx|js)?$/,
      exclude: /node_modules/,
      loader: require.resolve('eslint-loader'),
      options: {
        useEslintrc: false,
        configFile: require.resolve('../eslint/.eslintrc'),
        ignorePath: require.resolve('../eslint/.eslintignore'),
      },
    },
    {
      test: /\.(jsx|js)?$/,
      exclude: /node_modules\/(?!(@pecos)\/).*/,
      loader: require.resolve('babel-loader'),
      options: {
        babelrc: false,
        presets: babelConfig.presets,
        plugins: babelConfig.plugins,
        cacheDirectory: true,
      },
    },
    {
      test: /\.eot(\?v=\d+.\d+.\d+)?$/,
      use: [require.resolve('file-loader')],
    },
    {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
            name: 'fonts/[name].[ext]',
          },
        },
      ],
    },
    {
      test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: 10000,
            mimetype: 'application/octet-stream',
            name: 'fonts/[name].[ext]',
          },
        },
      ],
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: 10000,
            mimetype: 'image/svg+xml',
          },
        },
      ],
    },
    {
      test: /\.(jpe?g|png|gif|ico|pdf)$/i,
      use: [
        {
          loader: require.resolve('file-loader'),
          options: {
            name: 'images/[name].[ext]',
          },
        },
      ],
    },
    {
      test: /(\.css|\.scss|\.sass)$/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            sourceMap: true,
          },
        }, {
          loader: require.resolve('postcss-loader'),
          options: {
            plugins: () => [autoprefixer],
            sourceMap: true,
          },
        }, {
          loader: require.resolve('sass-loader'),
          options: {
            sourceMap: true,
          },
        },
      ],
    },
  ];

  return rules;
}

module.exports = getWebpackRules;

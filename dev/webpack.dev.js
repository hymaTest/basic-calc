const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = require('./webpack.base');

module.exports = merge(base, {
  mode: 'development',
  entry: ['./dev/web/index.ts'],
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: 'body',
      minify: {
        // removeComments: true,
        // collapseWhitespace: true,
        // minifyCSS: true,
        // minifyJS: true,
      },
    }),
  ],
});

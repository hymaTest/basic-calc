const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const base = require('./webpack.base');

const format = process.env.X_FORMAT;
const shouldMinify = +process.env.X_MINIFY === 1;
const libraryTarget = process.env.X_FORMAT === 'cjs' ? 'commonjs' : process.env.X_FORMAT;

const output = {
  filename: `map-core.${format}${shouldMinify ? '.min' : ''}.js`,
  libraryExport: 'default',
  libraryTarget,
};

module.exports = merge(base, {
  mode: 'production',
  entry: ['./src/index.ts'],
  output,
  optimization: {
    // 压缩js
    minimize: shouldMinify,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        parallel: true, // 多个进程并发运行
        extractComments: true,
      }),
    ],
  },
  plugins: [new CleanWebpackPlugin()],
});

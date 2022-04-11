const path = require('path');

module.exports = {
  entry: ['@babel/polyfill'],
  output: {
    library: 'MapCore',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [],
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.ts',
    ],
  },
  module: {
    rules: [ // Loaders 可以通过传入多个 loaders 以达到链式调用的效果，它们会从右到左被应用（从最后到最先配置）。
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              // 指定特定的ts编译配置，为了区分脚本的ts配置
              configFile: path.resolve(__dirname, '../tsconfig.json'),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
};

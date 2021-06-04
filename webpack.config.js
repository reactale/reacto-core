const path = require('path');

module.exports = {
  entry: './dist/transpiled-ts-js/index.js',
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  output: {
    filename: 'reacto.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
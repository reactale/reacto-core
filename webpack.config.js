const path = require('path');

module.exports = {
  entry: './dist/transpiled-ts-js/index.js',
  devServer: {
    contentBase: './compiled-js/',
  },
  output: {
    filename: 'reacto.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
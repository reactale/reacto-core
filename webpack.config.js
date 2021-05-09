const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: 'reacto.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
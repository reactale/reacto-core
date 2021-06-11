const path = require('path');
const { VERSION } = require('./dist/transpiled-ts-js/info')
module.exports = {
  entry: './dist/transpiled-ts-js/index.js',
  // devtool: "inline-source-map",
  output: {
    filename: `reacto-v${VERSION}.js`,
    path: path.resolve(__dirname, 'dist'),
  },
};
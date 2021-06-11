const path = require('path');
const { VERSION } = require('./src/info')
module.exports = {
  entry: './dist/transpiled-ts-js/index.js',
  // devtool: "inline-source-map",
  output: {
    filename: `reacto-v${VERSION}.js`,
    path: path.resolve(__dirname, 'dist'),
  },
};
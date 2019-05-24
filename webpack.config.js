const path = require('path');

module.exports = {
  mode: 'production',
  entry: './dist/common/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'hhp-utils.min.js',
    library: 'hhpUtils',
    libraryTarget: 'var',
    umdNamedDefine: true
  }
};

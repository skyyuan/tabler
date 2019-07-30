'use strict';

const babel = require('rollup-plugin-babel'),
  path = require('path');

export default {
  input: path.resolve(__dirname, '../js/index.js'),
  output: {
    file: 'dist/js/bundle.js',
    format: 'umd',
    name: 'tabler'
  }
};

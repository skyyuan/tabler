'use strict';

const babel = require('rollup-plugin-babel'),
  resolve = require('rollup-plugin-node-resolve'),
  path = require('path');

export default {
  input: [
    path.resolve(__dirname, '../js/tabler.js'),
    path.resolve(__dirname, '../js/demo.js'),
  ],
  output: {
    dir: 'dist/js/',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ],
};

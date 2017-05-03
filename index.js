/* eslint-env node */

var path = require('path');
var mergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');

var tdDirectory = path.resolve(path.dirname(require.resolve('testdouble')), '..');

module.exports = {
  name: 'ember-cli-testdouble',

  treeForVendor(tree) {
    var trees = [];

    if (tree) {
      trees.push(tree)
    }

    var tdTree = new Funnel(tdDirectory)
    trees.push(tdTree);

    return mergeTrees(trees);
  },

  included(app) {
    var vendor = this.treePaths.vendor;

    app.import(vendor + '/dist/testdouble.js', {
      type: 'test',
      using: [
        { transformation: 'amd', as: 'testdouble' }
      ]
    });
  }
};

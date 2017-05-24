/* eslint-env node */

'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

var tdDirectory = path.resolve(path.dirname(require.resolve('testdouble')), '..');

module.exports = {
  name: 'ember-cli-testdouble',

  treeForVendor(vendorTree) {
    var trees = [];

    if (vendorTree) {
      trees.push(vendorTree);
    }

    trees.push(new Funnel(tdDirectory));

    return new MergeTrees(trees);
  },

  included(app) {
    this._super.included.apply(this, arguments);

    var vendorPath = this.treePaths.vendor;

    app.import(`${vendorPath}/dist/testdouble.js`, {
      type: 'test',
      using: [
        { transformation: 'amd', as: 'testdouble' }
      ]
    });
  }
};

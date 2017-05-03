/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-testdouble',

  included(app) {
    this._super.included.apply(this, arguments);
    app.import('vendor/testdouble.js', { type: 'test' });
    app.import('vendor/shims/testdouble.js', { type: 'test' });
  },

  treeForVendor(vendorTree) {
    var tdTree = new Funnel(path.join(this.project.root, 'node_modules', 'testdouble', 'dist'), {
      files: ['testdouble.js']
    });

    return new MergeTrees([vendorTree, tdTree]);
  }
};

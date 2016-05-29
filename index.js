/* jshint node: true */
'use strict';
var path = require('path');

module.exports = {
  name: 'ember-cli-testdouble',

  included: function included(app) {
    if (app.app) {
      app = app.app;
    }
    this.app = app;

    app.import('bower_components/testdouble/dist/testdouble.js');
    app.import('vendor/shims/testdouble.js', {
      type: 'vendor',
      exports: {
        'testdouble': ['default']
      }
    });
  }
};

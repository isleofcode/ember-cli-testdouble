(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['td'],
      __esModule: true,
    };
  }

  define('testdouble', [], vendorModule);
})();

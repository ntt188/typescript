var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  var returnValue = path.replace(/^\/base\//, '').replace(/\.js$/, '');
  return returnValue;
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  baseUrl: '/base',

  paths: {
    'lodash' : 'node_modules/lodash/lodash'
  },
  shim: {
    'lodash' : {
        exports: '_'
    }  
  },

  deps: allTestFiles,

  callback: function() {
    console.log('load complete');
    window.__karma__.start();
  },
});
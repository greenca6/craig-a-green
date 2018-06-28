/**
 * Polyfills for IE 9+
 */

require('core-js/es6/map');
require('core-js/es6/set');
require('babel-polyfill');

// A requestAnimationFrame shim may not be needed if it's added to Jest or JSDom
// https://github.com/facebook/jest/issues/4545
if (!global.requestAnimationFrame) {
  global.requestAnimationFrame = function (callback) {
    setTimeout(callback, 0);
  };
}

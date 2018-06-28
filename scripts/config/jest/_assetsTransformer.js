/**
 * This is a fix for jest loading static assets (fonts/images).
 */
const path = require('path');

module.exports = {
  process(src, filename /* , config, options */) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  },
};

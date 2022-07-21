/**
 * import uswds-compile
 */
const uswds = require("@uswds/compile");
/**
 * USWDS version
 */

 uswds.settings.version = 3;
 /**
 * Path settings
 * Set as many as you need
 */

uswds.paths.dist.css = './assets/uswds/dist/css';
uswds.paths.dist.fonts = './assets/uswds/dist/fonts';
uswds.paths.dist.theme = './assets/uswds/dist/theme';
uswds.paths.dist.img = './assets/img';
uswds.paths.dist.js = './assets/uswds/dist/js';

/**
 * Exports
 * Add as many as you need
 */
 exports.init = uswds.init; //initialize design system on the project; command: npx gulp init
 exports.copyAll = uswds.copyAll; // copy all files
 exports.compile = uswds.compile; // compile sass files; command: npx gulp compile

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

// uswds.paths.dist.css = './assets/uswds/dist/css';
uswds.paths.dist.css = './assets/css';
uswds.paths.dist.fonts = './assets/fonts';
uswds.paths.src.theme = './assets/css/theme'; // customized uswds components
uswds.paths.dist.theme = './assets/theme'; // customized uswds components
uswds.paths.dist.img = './assets/img';
uswds.paths.dist.js = './assets/js';

/**
 * Exports
 * Add as many as you need
 */
 exports.init = uswds.init; //initialize design system on the project; command: npx gulp init
 exports.copyAll = uswds.copyAll; // copy all files
 exports.compile = uswds.compile; // compile sass files; command: npx gulp compile

/* Brocfile.js */

// Import some Broccoli plugins
var BroccoliSass = require('broccoli-sass');
var compileTypeScript = require('broccoli-typescript-compiler').typescript;
var mergeTrees = require('broccoli-merge-trees');
var tsConfig = require('./tsconfig.json');

// Specify the Sass and Coffeescript directories
var sassDir = 'src/styles';
var tsDir = 'src/app';

var styles = new BroccoliSass([sassDir], 'index.scss', 'app.css');

// Tell Broccoli how we want the assets to be compiled
var scripts = compileTypeScript(tsDir);

// Merge the compiled styles and scripts into one output directory.
module.exports = mergeTrees([styles, scripts]);
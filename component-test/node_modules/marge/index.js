// Marge
// -----
//
// Maciej Adwent http://github.com/Maciek416
//
// 1. Attempt to source arguments from default config path first.
//    Only throw an error if the file is *present*, but *malformed*.
// 2. Override or further define arguments from yargs.argv
//

var path = require("path");
var yargs = require("yargs");

var argv = {};

module.exports = {
  init: function (defaultConfigFilePath, configFilePath) {
    var explicitlyDefinedConfigFilePath = configFilePath;

    configFilePath = configFilePath || defaultConfigFilePath;

    // First, collect arguments from a file if they exist.
    var argsFromFile;
    var filename = path.resolve(configFilePath);

    try {
      argsFromFile = require(filename);
      console.log("Loaded configuration from: ", filename);
    } catch (e) {
      // Treat missing configuration as a soft error unless path is explicitly set.
      if (e.code === "MODULE_NOT_FOUND") {
        // this is ok -- the config file is not required to exist
        if (explicitlyDefinedConfigFilePath) {
          // If we specified this configuration path *explicitly*, fail
          throw new Error("Configuration not found: " + filename);
        }
      } else {
        // Treat unparseable configuration as a hard error.
        throw new Error("Could not load or parse configuration from " + filename);
      }
    }

    if (argsFromFile && typeof argsFromFile === "object") {
      Object.keys(argsFromFile).forEach(function (key) {
        argv[key] = argsFromFile[key];
      });
    }

    // Second, collect overriding arguments from process.argv.
    Object.keys(yargs.argv).forEach(function (key) {
      if (key.indexOf("$") === 0 || key === "_") {
        // Ignore these keys
      } else {
        argv[key] = yargs.argv[key];
      }
    });

  },

  argv: argv
};
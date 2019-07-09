const cucumber = require('cypress-cucumber-preprocessor').default;
const {
  addMatchImageSnapshotPlugin,
} = require('cypress-image-snapshot/plugin');

module.exports = (on, config) => {
  on('file:preprocessor', cucumber()),
    addMatchImageSnapshotPlugin(on, config);
}
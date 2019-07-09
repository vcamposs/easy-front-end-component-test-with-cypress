// reexporting here for backward compability
const {
  given,
  when,
  then,
  defineParameterType
} = require("./lib/resolveStepDefinition");

console.warn(
  "DEPRECATION WARNING! Please change your imports from cypress-cucumber-preprocessor/resolveStepDefinition to cypress-cucumber-preprocessor/steps"
);

module.exports = {
  given,
  when,
  then,
  Given: given,
  When: when,
  Then: then,
  defineParameterType
};

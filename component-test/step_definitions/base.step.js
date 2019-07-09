import { Then } from "cypress-cucumber-preprocessor/steps";
const basePage = require('../page_objects/base.page');

Then('Open {string}', page => {
	basePage.openUrl(page);
	//cy.matchImageSnapshot('home');
});

Then('I am redirect to {string}', url => {
	basePage.verifyUrl(url);
});

Then('I click on {string} button', button => {
	basePage.clickButton(button);
});

Then('I fill {string} with {string}', (field, text) => {
	basePage.fillField(field,text)
});

Then('I verify the element {string} with text {string}', (element, label) => {
	basePage.verifyLabel(element, label);
	//cy.matchImageSnapshot('last-verify');
}); 
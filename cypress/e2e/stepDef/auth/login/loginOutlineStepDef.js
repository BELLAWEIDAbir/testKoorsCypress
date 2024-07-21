import { Given } from "cypress-cucumber-preprocessor/steps";
import Login from "../../../../pageObjects/pageActions/auth/login/login";

Given(/^I am on the director login page/, () => {
    Login.visitLogin();
});

When(/^I enter incorrect credentials (.*) and (.*)/, (email, password) => {

    Login.loginValid(email, password);
});


Then(/^I should see the error message (.*) under the (.*) field/, (errorMsg, fields) => {
    Login.verifyErrorMessage(fields, errorMsg);

});

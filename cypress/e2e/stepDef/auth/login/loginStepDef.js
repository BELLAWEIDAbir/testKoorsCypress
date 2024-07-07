import Login from "../../../../pageObjects/pageActions/auth/login/login";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Given(/^I am on the director login page/, () => {
  Login.visitLogin();
});

When(/^I enter the email (.*) And the password (.*)/, (email, password) => {
  // Login.enterEmail(email);
  // Login.enterPassword(password);
  // Login.submit();
  Login.loginValid(email, password);
});



Then(/^I am on Activity page/, () => {
  Login.verifyActivityPage();
});


When(/^I enter incorrect credentials email (.*) and password (.*)/, (email, password) => {
  // Login.enterEmail();
  // Login.enterPassword();
  // Login.submit();
  Login.loginValid(email, password);
});

Then(/^Under the (.*) field I should see the (.*)/, (fields, errormessages) => {
  Login.verifyErrorMessage(fields, errormessages);

});

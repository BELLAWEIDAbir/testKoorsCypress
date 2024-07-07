import loginPage from "../../../../pageObjects/pageActions/auth/login/login";
import logoutPage from "../../../../pageObjects/pageActions/auth/logout/logout";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
//Given(/^I am logged in as a director (.*) (.*)/, (email, password) => {
    //loginPage.visitLogin();
    // loginPage.enterEmail();
    // loginPage.enterPassword();
    // loginPage.submit();
  //   loginPage.loginValid(email,password);
  //   loginPage.verifyActivityPage();
  // });
  
  When(/^I click the logout button/, () => {
    logoutPage.clickLogoutButton();
  }); 
  
  Then(/^I should be redirected to the login page/, () => {
    logoutPage.verifyLoginPage();
  });
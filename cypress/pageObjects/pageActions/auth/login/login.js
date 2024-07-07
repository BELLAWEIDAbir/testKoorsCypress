import selectorsLogin from "../../../pageElements/auth/login/login";
class Login {

  visitLogin() {
    cy.visit("https://app.uat.koors.io/uptotestg2/auth/login");
  };
  enterEmail(email) {
    cy.get(selectorsLogin.inputEmail).type(email);
  };

  enterPassword(password) {
    cy.get(selectorsLogin.inputPassword).type(password);
  };

  submit() {
    cy.get(selectorsLogin.btnLogin).click();
  };

  loginValid(email, password) {
    if (email) {
      cy.get(selectorsLogin.inputEmail).type(email);
    }
    if (password) {
      cy.get(selectorsLogin.inputPassword).type(password);
    }
    cy.get(selectorsLogin.btnLogin).click();
  };

  verifyActivityPage() {

    cy.url().should('include', '/activity');
  };

  verifyErrorMessage(fields, errormessages) {
    const field = fields.toString();
    let selector;
    switch (true) {
      case field.includes("email"):
        selector = selectorsLogin.errorMsg;
        break;
      case field.includes("password"):
        selector = selectorsLogin.errorMsg;
        break;
      default:
        throw new Error("Invalid field provided");
    }
    cy.get(selector).should('contain', errormessages);
    // cy.get(selectorsLogin.errorMsg).should('contains', 'mot de passe');
    //cy.get('E-mail ou mot de passe incorrecte').should('contain', 'E-mail ou mot de passe incorrecte');
  };
}
export default new Login();
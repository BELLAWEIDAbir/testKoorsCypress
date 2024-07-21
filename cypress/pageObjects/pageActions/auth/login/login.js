import selectorsLoginOutline from "../../../pageElements/auth/login/loginOutline";
class Login {

  visitLogin() {
    cy.visit("https://app.uat.koors.io/uptotestg2/auth/login");
  };
  enterEmail(email) {
    cy.get(selectorsLoginOutline.inputEmail).type(email);
  };

  enterPassword(password) {
    cy.get(selectorsLoginOutline.inputPassword).type(password);
  };

  submit() {
    cy.get(selectorsLoginOutline.btnLogin).click();
  };

  loginValid(email, password) {
    if (email) {
      cy.get(selectorsLoginOutline.inputEmail).type(email);
    }
    if (password) {
      cy.get(selectorsLoginOutline.inputPassword).type(password);
    }
    cy.get(selectorsLoginOutline.btnLogin).click();
  };

  verifyActivityPage() {
    cy.wait(2000);
    cy.url().should('include', '/activity');
  };

  verifyErrorMessage(fields, errorMsg) {
    const field = fields.toString();
    let selector;
    switch (true) {
      case field.includes("email"):
        selector = selectorsLoginOutline.errorMsg;
        break;
      case field.includes("password"):
        selector = selectorsLoginOutline.errorMsg;
        break;
      default:
        throw new Error("Invalid field provided");
    }
    cy.wait(4000);
    cy.get(selector).should('contain', errorMsg);

  };
}
export default new Login();
import selectorsLogout from "../../../pageElements/auth/logout/logout";
class LogoutPage {
  clickLogoutButton() {
    //cy.viewport(1500, 1320);
    cy.wait(2000);
    cy.get(selectorsLogout.btnMenu).click({ force: true });
    cy.wait(2000);
    cy.get(selectorsLogout.btnLogout).click({ force: true });
  };

  verifyLoginPage() {
    cy.url().should('contains', '/login');
    //cy.get(selectorsLogout.logo).should('be.visible');
  };
}

export default new LogoutPage();
import selectorsInvitStudentByList from "../../../pageElements/auth/inviteStudentByList/inviteStudentByList";

class InviteStudentByListe {
clickImportListBtn(){
    cy.get(selectorsInvitStudentByList.btnImportList).click();
};
clickSelectFile() {
cy.get(selectorsInvitStudentByList.btnSelectFile).click();
cy.get('input[type="file"]').attachFile('template-fr4a29aaae.xlsx');
//cy.get("input[type=file]").selectFile("C:\\Users\\abir.bellaweid_arond\\Desktop\\Cypress\\template1.xlsx");
cy.wait(2000);
};
clickAcceptanceBtn() {
    cy.get(selectorsInvitStudentByList.btnAcceptance).click();
};

clickContinuerBtn() {
    cy.get(selectorsInvitStudentByList.btnContinuer).click();
};

clickEnvoyerlesinvitationsBtn() {
    cy.get(selectorsInvitStudentByList.btnEnvoyerLesInvitations).click();
};

clickConfirmerEtEnvoyerBtn() {
    cy.get(selectorsInvitStudentByList.btnConfirmerEtEnvoyer).click();
};
clickRetourALalisteDesEtudiantsBtn() {
    cy.get(selectorsInvitStudentByList.btnRetourALaListeDesEtudiants).click();
};
ClickX() {
    cy.get(selectorsInvitStudentByList.btnX).click();
};

};
export default new InviteStudentByListe ();
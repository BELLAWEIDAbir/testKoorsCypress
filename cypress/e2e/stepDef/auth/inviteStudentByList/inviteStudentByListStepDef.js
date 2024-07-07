import inviteStudent from "../../../../pageObjects/pageActions/auth/inviteStudent/inviteStudent"
import inviteStudentByList from "../../../../pageObjects/pageActions/auth/inviteStudentByList/inviteStudentByList";

//Invite Student  By List successfully
When(/^director clicks on add student button/, () => {
    inviteStudent.clickStudentBtn();
});

And(/^director clicks on importList button/, () => {
    inviteStudentByList.clickImportListBtn();
});

And(/^director clicks on selectFile button/, () => {
    inviteStudentByList.clickSelectFile();
});

And(/^director clicks on acceptance/, () => {
    inviteStudentByList.clickAcceptanceBtn();
});
When(/^director clicks on "Continuer"/, () => {
    inviteStudentByList.clickContinuerBtn();
});

When(/^director clicks on "Envoyer les invitations"/, () => {
    inviteStudentByList.clickEnvoyerlesinvitationsBtn();
});

When(/^director clicks on "confirmer et envoyer"/, () => {
    inviteStudentByList.clickConfirmerEtEnvoyerBtn();
});

When(/^director clicks on "retour à la liste des etudiants"/, () => {
    inviteStudentByList.clickRetourALalisteDesEtudiantsBtn();
});
When(/^director clicks on "X"/, () => {
    inviteStudentByList.ClickX();

});
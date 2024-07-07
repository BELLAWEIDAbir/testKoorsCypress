import selectorsInvitStudent from "../../../pageElements/auth/inviteStudent/inviteStudent";
class InviteStudent {
  clickStudentBtn() {
    cy.viewport(1500, 1320);
    //cy.viewport(1400, 1000);
    cy.get(selectorsInvitStudent.btnEtudiant).click();
    cy.get(selectorsInvitStudent.btnAddStudent).click();

  };
  addStudent(nom, prenom) {
    const email = randomEmail();
    cy.get(selectorsInvitStudent.inputNom).type(nom);
    cy.get(selectorsInvitStudent.inputPrenom).type(prenom);
    cy.get(selectorsInvitStudent.inputMail).type(email);
    cy.get(selectorsInvitStudent.btnInviter).click();
    cy.get(selectorsInvitStudent.invitSuccess).should('be.visible');
    cy.get(selectorsInvitStudent.btnRetour).click();
  };

  addStudentInvalid(FirstName, LastName, mail) {
    if (FirstName) {
      cy.get(selectorsInvitStudent.inputNom).type(FirstName);
    }
    if (LastName) {
      cy.get(selectorsInvitStudent.inputPrenom).type(LastName);
    }
    if (mail) {
      cy.get(selectorsInvitStudent.inputMail).type(mail).blur();
      cy.wait(1000);
    }
    //cy.get(selectorsInvitStudent.btnInviter).click();
  };

  verifyErrorMessage(fields, errormessages) {
    const field = fields.toString();
    let selector;
    switch (true) {
      case field.includes("mail"):
        selector = selectorsInvitStudent.errormessg;
        break;
      case field.includes("mailInvalid"):
        selector = selectorsInvitStudent.errormessg;
        break;
      default:
        throw new Error("Invalid field provided");
    }
    cy.get(selector).should('contain', errormessages);
  };

  // addStudentEmptyfield(Name1, LastName1, mail1) {
  //   if (Name1) {
  //     cy.get(selectorsInvitStudent.inputNom).type(Name1);
  //   }
  //   if (LastName1) {
  //     cy.get(selectorsInvitStudent.inputPrenom).type(LastName1);
  //   }
  //   if (mail1) {
  //     cy.get(selectorsInvitStudent.inputMail).type(mail1).blur();
  //   }
  // };

  addStudentEmptyfield(Name1, LastName1, mail1) {
    if (Name1)
      cy.get(selectorsInvitStudent.inputNom).type(Name1);

    if (LastName1)
      cy.get(selectorsInvitStudent.inputPrenom).type(LastName1);

    if (mail1)
      cy.get(selectorsInvitStudent.inputMail).type(mail1).blur();


  };
  verifyButtonDisabled(fields) {
    const field = fields.toString();
    switch (true) {
      case field.includes("Name1"):
        break;
      case field.includes("LastName1"):
        break;
      case field.includes("mail1"):
        break;
    }
    cy.get(selectorsInvitStudent.btnInviter).should('be.disabled');
  }
};


export default new InviteStudent();

function randomEmail() {
  const randomString = Math.random().toString(36).substring(2, 11);
  return `qa+${randomString}@koors.io`;
  //return "qa+abab@koors.io";

}
import InviteStudent from "../../../../pageObjects/pageActions/auth/inviteStudent/inviteStudent";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

//Invite Student successfully
When(/^director adds a student with the information (.*) , (.*) and the email/, (nom, prenom) => {
    InviteStudent.clickStudentBtn();
    InviteStudent.addStudent(nom, prenom);
});

//Invalid Invite Student
When(/^director adds a student FirstName (.*) , LastName (.*) and a mail (.*)/, (FirstName, LastName, mail) => {
    InviteStudent.clickStudentBtn();
    InviteStudent.addStudentInvalid(FirstName, LastName, mail);
});


Then(/^Under the (.*) field I should see the (.*)/, (fields, errormessages) => {
    InviteStudent.verifyErrorMessage(fields, errormessages);
}
);

//Invalid Invite student with empty field
When(/^director leaves FirstName (.*) , LastName (.*) or mail (.*) empty/, (Name1, LastName1, mail1) => {
    InviteStudent.clickStudentBtn();
    InviteStudent.addStudentEmptyfield(Name1, LastName1, mail1);
});
Then(/^I should see the invitation button disabled (.*)/, (fields) => {
    InviteStudent.verifyButtonDisabled(fields);
});



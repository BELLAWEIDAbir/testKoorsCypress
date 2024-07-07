
Feature: Invite Student

    Background:
        Given I am on the director login page
        When I enter the email qa+uptotestg2@koors.io And the password 123456789SF

   Scenario: Invite Student successfully
 When director adds a student with the information Bellaweid , Abir and the email
Then I click the logout button


    Scenario Outline: Invalid Invite Student
       When director adds a student FirstName <FirstName> , LastName <LastName> and a mail <mail>
       Then Under the <fields> field I should see the <errormessages>
        Then I click the logout button

        Examples:
            | FirstName | LastName | mail                     | fields      | errormessages       |
            | test      | test     | insafmahdhaoui@gmail.com | mail        | L'email déja existe |
            | test      | test     | aaa                      | mailInvalid | L'email est invalid |


    Scenario Outline: Invalid Invite student with empty field
        When director leaves FirstName <Name1> , LastName <LastName1> or mail <mail1> empty
        Then I should see the invitation button disabled <fields>
        Then I click the logout button

        Examples:
            | Name1 | LastName1 | mail1                    | fields    |
            |       | Be        | insafmahdhaoui@gmail.com | Name1     |
            | Abir  |           | insafmahdhaoui@gmail.com | LastName1 |
            | Abir  | Be        |                          | mail1     |
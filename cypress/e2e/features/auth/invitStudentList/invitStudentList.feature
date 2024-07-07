Feature: Invite Student By List

    Background:
        Given I am on the director login page
        When I enter the email qa+uptotestg2@koors.io And the password 123456789SF

   Scenario: Invite Student  By List successfully
        When director clicks on add student button 
        And  director clicks on importList button
        And  director clicks on selectFile button
        And director clicks on acceptance
        And director clicks on "Continuer"
        And director clicks on "Envoyer les invitations"
        And director clicks on "confirmer et envoyer"
        And director clicks on "retour à la liste des etudiants"
        And director clicks on "X"
        #Then director will be redirected to the page "Tous les étudiants"

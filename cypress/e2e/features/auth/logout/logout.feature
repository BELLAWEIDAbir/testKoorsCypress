Feature: Logout
Background:
    Given I am on the director login page
    When I enter the email qa+uptotestg2@koors.io And the password 123456789SF
    
  Scenario: User logs out successfully
    When I click the logout button
    Then I should be redirected to the login page
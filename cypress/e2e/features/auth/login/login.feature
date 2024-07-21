Feature: director Login with valid and invalid credentials
  Background:
    Given I am on the director login page

  Scenario: Successful director Login
    When I enter the email qa+uptotestg2@koors.io And the password 123456789SF
    Then I am on Activity page


  # Scenario Outline: Invalid director Login
  #   When I enter incorrect credentials email <email> and password <password>
  #   Then Under the <fields> field I should see the <errorMsg1>
  #   Examples:
  #     | email                  | password    | fields   | errorMsg1                                        |
  #     | qa+uptotestg2@koors.i  | 123456789SF | email    | Le login et le mot de passe ne correspondent pas |
  #     | qa+uptotestg2@koors.io | 123456789S  | password | E-mail ou mot de passe incorrecte                |
  #     | qa+uptotestg2@koors.io |             | password | E-mail ou mot de passe incorrecte                |
  #     |                        | 123456789SF | email    | E-mail ou mot de passe incorrecte                |
  #     |                        |             | email    | E-mail ou mot de passe incorrecte                |
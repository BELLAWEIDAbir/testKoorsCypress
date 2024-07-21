Feature: Invalid director login with various incorrect credentials

  Scenario Outline: Invalid director login
    Given I am on the director login page
    When I enter incorrect credentials <email> and <password>
    Then I should see the error message <errorMsg> under the <fields> field

    Examples:
      | email                  | password    | fields   | errorMsg                                         |
      | qa+uptotestg2@koors.i  | 123456789SF | email    | Le login et le mot de passe ne correspondent pas |
      | qa+uptotestg2@koors.io | 123456789S  | password | E-mail ou mot de passe incorrecte                |
      | qa+uptotestg2@koors.io |             | password | E-mail ou mot de passe incorrecte                |
      |                        | 123456789SF | email    | E-mail ou mot de passe incorrecte                |
      |                        |             | email    | E-mail ou mot de passe incorrecte                |
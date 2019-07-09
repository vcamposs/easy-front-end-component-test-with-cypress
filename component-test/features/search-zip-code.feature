Feature: a
  # Scenario Outline: a
  Scenario: a
    Given Open "/"
    When I am redirect to "http://localhost:3000/"
    #And I verify the element "app-title" with text "Search location with ZIP Code (BR)--"
    And I verify the element "app-env" with text "http://localhost:9003"
    And I verify the element "location" with text "Put a BR zip code (ex.: 13023150)"
    #And I fill "zip-code" with "<zipCode>"
    
    And I fill "zip-code" with "13023150"

    And I click on "submit" button
    #Then I verify the element "location" with text "<locationText>"
    # Examples:
    #   | zipCode  | locationText                         |
    #   | 13023150 | Location : Praça Padre Lauro Sigrist |
    #   | 01001000 | Location : Praça da Sé               |
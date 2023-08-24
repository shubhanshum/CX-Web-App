Feature: Check radio buttons

Scenario: Validate all scenarios for a radio buttons

Given I navigate to automation practice page
When I print the length of radio buttons
And I select radio button "Radio2" using index
And I refresh the page
And I select radio button "Radio1" using name


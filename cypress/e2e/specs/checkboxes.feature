Feature: Check check boxes

Scenario: Validate all scenarios for a check box

Given I navigate to automation practice page
When I print the length of check boxes
And I select check box "Option2" using index
And I refresh the page
And I select check box "Option1" using name
And I refresh the page
And I select check boxes "Option1" and "Option3" using name
And I unselect "Option3" check box
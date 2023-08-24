Feature: Check dropdown

Scenario: Validate all scenarios for a dropdown

Given I navigate to automation practice page
When I select "Option2" from dropdown using name
And I refresh the page
And I select "Option3" from dropdown using index
And I print all the dropdown options
And I print length of dropdown options
And I print default option selected in dropdown
And I validate the dropdown length with assertions
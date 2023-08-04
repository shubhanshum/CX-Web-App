Feature: Check customer's profile data

Background:
Given I login into banking application

Scenario: Validate that correct customer's profile data is shown

When I click on "More" tab from left side navigation
And I click on "Profile" tab
Then I should see page title is "My Profile"
And I should see "Name"
And I should see "Address"
And I should see "Zip code"
And I should see "Country"
And I should see "Phone number"
And I should see "Email"
And I should see "Date of birth"
And I should see "To update your information, please contact us." string
And I should see "Contact us" button
When I click on "Contact us" button
Then I should see URL contains "contact-us"
And I should see "Message"
And I should see "Email" text field
And I should see "Call"
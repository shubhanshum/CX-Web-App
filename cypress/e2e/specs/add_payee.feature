Feature: Check Add a payee

Scenario: Validate add a new payee with valid data

Given I login into banking application
When I click on the "Payments" tab from left side navigation
And I click on "Add payee" button on Payment page
And I click on "Local in DZD for Algeria" button on Select Payment Type page
And I enter "Account Holder Name" and "Account Number" on Add Payee page
And I click on "Continue" button on Add Payee page
And I click on "Add payee" button on Confirm details page
And I complete "2FA OTP" authentication
Then I should see "Payee added" message
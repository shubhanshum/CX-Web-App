Feature: Check make local transafers for positive scenarios (Local payout)

Background:
Given I login into banking application

Scenario Outline: Validate make transfers to existing payee with different amounts

When I click on the "Payments" tab from left side navigation
And I select an existing payee "<PayeeName>"
And I click on "Make a payment" button on "Payee details" page
And I enter "<Amount>" on "Amount" field on "Make a payment" page
And I enter "<Reference>" in "Reference" field on "Make a payment" page
And I click on "Continue" button on "Make a payment" page
And I click on "Confirm payment" button on "Confirm details" page
And I complete "2FA OTP" authentication
Then I should see "Payment sent" message
And I click on "Done" button

Examples:
|PayeeName|    |Amount|    |Reference|
|Salary|        |10|        |my ref|
|Rent|          |30|        |test ref|

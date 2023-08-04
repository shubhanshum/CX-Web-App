Feature: Check make a local transafer for negative scenarios (Local payout)

Scenario: Validate error message while making a transfer to existing payee with 0 amount

Given I login into banking application
When I click on the "Payments" tab from left side navigation
And I select an existing payee
|PayeeName|
|Rent|
And I click on "Make a payment" button on "Payee details" page
And I enter "Amount" in "Amount" field on "Make a payment" page
|Amount|
|0|
And I enter "Reference" in "Reference" field on "Make a payment" page
|Reference|
|ref A|
And I click on "Continue" button on "Make a payment" page
Then I should see "Amount must be greater than 0" error message





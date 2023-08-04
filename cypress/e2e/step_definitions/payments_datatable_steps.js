/// <reference types="cypress" />
import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

And(/^I select an existing payee$/,(datatable)=>{
    datatable.hashes().forEach(elements => {
        cy.contains(elements.PayeeName,{timeout:15000}).click()
    });
})

And(/^I click on "Make a payment" button on "Payee details" page$/,()=>{
    cy.xpath("//span[contains(@data-testid,'payeeDetails.makeAPayment')]",{timeout:10000}).click()
})

And(/^I enter "Amount" in "Amount" field on "Make a payment" page$/,(datatable)=>{
    datatable.hashes().forEach(elements => {
        cy.get('#amount',{timeout:10000}).type(elements.Amount)
    });
})

And(/^I enter "Reference" in "Reference" field on "Make a payment" page$/,(datatable)=>{
    datatable.hashes().forEach(elements => {
        cy.get('#reference').type(elements.Reference)
    });
})

And(/^I click on "Continue" button on "Make a payment" page$/,()=>{
    cy.xpath("//span[contains(@data-testid,'makePayment.continue')]").click()
})

Then(/^I should see "Amount must be greater than 0" error message$/,()=>{
    cy.contains('Amount must be greater than 0').should('be.visible')
})
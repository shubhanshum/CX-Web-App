/// <reference types="cypress" />
import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

And(/^I select an existing payee "(.*)"$/,(payeename)=>{
    cy.contains(payeename).click();
})

And(/^I enter "(.*)" on "Amount" field on "Make a payment" page$/,(amount)=>{
    cy.get('#amount',{timeout:10000}).type(amount)
})

And(/^I enter "(.*)" in "Reference" field on "Make a payment" page$/,(reference)=>{
    cy.get('#reference',{timeout:10000}).type(reference)
})

And(/^I click on "Confirm payment" button on "Confirm details" page$/,()=>{
    cy.xpath("//span[contains(@data-testid,'confirmPayment.confirmPayment')]",{timeout:10000}).click()
})

Then(/^I should see "Payment sent" message$/,()=>{
    cy.xpath("//h1[@data-testid='title-undefined']",{timeout:10000}).should('have.text','Payment sent')
})

And(/^I click on "Done" button$/,()=>{
    cy.xpath("//button[@data-testid='button-undefined']").click()
})
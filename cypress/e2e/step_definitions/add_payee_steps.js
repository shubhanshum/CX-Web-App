/// <reference types="cypress" />

import { Given,When,And,Then } from 'cypress-cucumber-preprocessor/steps';

When(/^I click on the "Payments" tab from left side navigation$/,()=>{
    cy.xpath("//span[@data-testid='menus.payments']",{timeout:15000}).click()  
});

And(/^I click on "Add payee" button on Payment page$/,()=>{
    cy.xpath("//button[contains(@data-testid,'addPayee')]").click()  
});

And(/^I click on "Local in DZD for Algeria" button on Select Payment Type page$/,()=>{
    cy.contains('Local in DZD for Algeria').click() 
});

And(/^I enter "Account Holder Name" and "Account Number" on Add Payee page$/,()=>{
    cy.fixture('Banking_data').then((payee=>{
    cy.get('#account_holder').type(payee.payeeDetails.account_holder)
    cy.get('#account_number').type(payee.payeeDetails.account_number)
    }))
    
});

And(/^I click on "Continue" button on Add Payee page$/,()=>{
    cy.xpath("//button[contains(@data-testid,'addPayee.continue')]").click()
});

And(/^I click on "Add payee" button on Confirm details page$/,()=>{
    cy.xpath("//button[contains(@data-testid,'confirm_payee')]").click()
});

And(/^I complete "2FA OTP" authentication$/,()=>{
    cy.get('#OTP',{timeout:15000}).should('be.visible')
    cy.get2faCode().then(($otp=>{
        cy.get('#OTP').type($otp)
        cy.xpath("//button[(@type='submit')]").click()
    }))
});

Then(/^I should see "Payee added" message$/,()=>{
    cy.wait(15000)
    cy.fixture('phrases').then((phrase)=>{
        cy.xpath("//h1[@data-testid='title-undefined']").should('have.text',phrase.payeeAdded)
    })
});
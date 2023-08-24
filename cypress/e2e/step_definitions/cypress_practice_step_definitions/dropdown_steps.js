/// <reference types="cypress" />

import { Given,When,And } from 'cypress-cucumber-preprocessor/steps';

Given(/^I navigate to automation practice page$/,()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
})

When(/^I select "Option2" from dropdown using name$/,()=>{
    cy.get('#dropdown-class-example').select('Option2');
});

And(/^I refresh the page$/,()=>{
    cy.wait(2000)
    cy.reload()
});

And(/^I select "Option3" from dropdown using index$/,()=>{
    cy.get('#dropdown-class-example').select(3);
});

And(/^I print length of dropdown options$/,()=>{
    //Locate dropdown and then find HTML tags (for options) which is option in my case
    cy.get('#dropdown-class-example').find('option').then((elements)=>{
        let length=elements.length
        cy.log("Length is "+length)
    })
});

And(/^I print all the dropdown options$/,()=>{
    cy.get('#dropdown-class-example').each(($elements)=>{  
        cy.log($elements.text())
    });
});

And(/^I print default option selected in dropdown$/,()=>{
    cy.get('#dropdown-class-example').find('option').first().then((element)=>{
        cy.log('Default selected option is:'+element.text())
    })
});

And(/^I validate the dropdown length with assertions$/,()=>{
    cy.get('#dropdown-class-example').find('option').should('have.length',4)
});


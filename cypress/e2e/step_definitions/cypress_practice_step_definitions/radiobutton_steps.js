/// <reference types="cypress" />

import { Given,When,And } from 'cypress-cucumber-preprocessor/steps';

Given(/^I navigate to automation practice page$/,()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
});

When(/^I print the length of radio buttons$/,()=>{
    cy.get('#radio-btn-example').find('label').then((elements)=>{
        let length=elements.length
        cy.log('Radio buttons length is:'+length)
    })
});


And(/^I select radio button "Radio2" using index$/,()=>{
    //check() method can be used for check boxes and radio buttons
    //but in my case HTML tag is label so I am using click()
    cy.xpath("//input[@name='radioButton']").eq(1).click()
});

And(/^I select radio button "Radio2" using index$/,()=>{
    cy.reload()
});

And(/^I select radio button "Radio1" using name$/,()=>{
    //check() method can be used for check boxes and radio buttons
    //but in my case HTML tag is label so I am using click()
    cy.get('#radio-btn-example').find('label').contains('Radio1').find('input').click()
});


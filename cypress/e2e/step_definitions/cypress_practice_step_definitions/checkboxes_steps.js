/// <reference types="cypress" />

import { Given,When,And } from 'cypress-cucumber-preprocessor/steps';

Given(/^I navigate to automation practice page$/,()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
})

When(/^I print the length of check boxes$/,()=>{
    cy.get('#checkbox-example').find('label').then(($length)=>{
        cy.log('Length of checkboxes is=>'+$length.length)
    })
    
});

And(/^I select check box "Option2" using index$/,()=>{
    //cy.get('#checkbox-example').find('label').select(1)
    //We can't call select() function here because html tag should be select
    cy.get('#checkbox-example').find('label').find('input').eq(1).click()
});

And(/^I select check box "Option1" using name$/,()=>{
    cy.get('#checkbox-example').find('label').find('input').each(($element)=>{
        let actValue=$element.attr('value'); //this will give attribute value
        cy.log('Attribute value is:'+actValue)
            if (actValue=='option1'){
                cy.xpath("//input[@value='"+actValue+"']").click()
                return false
            }
    })
});

And(/^I select check boxes "Option1" and "Option3" using name$/,()=>{
    cy.get('#checkbox-example').find('label').find('input').each(($element)=>{
        let actValue=$element.attr('value'); //this will give attribute value
        cy.log('Attribute value is:'+actValue)
            if (actValue=='option1'){
                cy.xpath("//input[@value='"+actValue+"']").click()
            }
            if (actValue=='option3'){
                cy.xpath("//input[@value='"+actValue+"']").click()
                return false
            }
    })
});

And(/^I unselect "Option3" check box$/,()=>{
    cy.get('#checkbox-example').find('label').find('input').each(($element)=>{
        let actValue=$element.attr('value'); //this will give attribute value
            if (actValue=='option3'){
                cy.xpath("//input[@value='"+actValue+"']").click()
                return false
            }
    })
})


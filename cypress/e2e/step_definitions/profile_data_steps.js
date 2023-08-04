/// <reference types="cypress" />
import { When, And, Then } from 'cypress-cucumber-preprocessor/steps';

When(/^I click on "More" tab from left side navigation$/,()=>{
    cy.xpath("//span[@data-testid='menus.more']",{timeout:12000}).click();
});

And(/^I click on "Profile" tab$/,()=>{
    cy.xpath("//span[@data-testid='menus.profile']").click();
});

Then(/^I should see page title is "My Profile"$/,()=>{
    cy.xpath("//h1[@data-testid='profile.root.heading']").should('have.text','My Profile')
});

And(/^I should see "Name"$/,()=>{
    cy.contains('Name').should('be.visible')
    cy.fixture('banking_data').then((userData)=>{
        cy.xpath("//div[@data-testid='table-name']").should('have.text',userData.userProfileData.name)
    });
});

And(/^I should see "Address"$/,()=>{
    cy.contains('Address').should('be.visible')
    cy.fixture('banking_data').then((userData)=>{
        cy.xpath("//div[@data-testid='table-address']").then(($text)=>{
            let actualText=$text.text().trim()
            let expectedText=userData.userProfileData.address
            expect(actualText).equal(expectedText)
        }) 
    });
});

And(/^I should see "Zip code"$/,()=>{
    cy.contains('Post / Zip code').should('be.visible')
    cy.fixture('banking_data').then((userData)=>{
        cy.xpath("//div[@data-testid='table-postalCode']").should('have.text',userData.userProfileData.post)
    });
});

And(/^I should see "Country"$/,()=>{
    cy.contains('Country').should('be.visible')
    cy.fixture('banking_data').then((userData)=>{
        cy.xpath("//div[@data-testid='table-country']").should('have.text',userData.userProfileData.country)
    });
});

And(/^I should see "Phone number"$/,()=>{
    cy.contains('Phone number').should('be.visible')
    cy.fixture('banking_data').then((userData)=>{
        cy.xpath("//div[@data-testid='table-mobileNumber']").should('have.text',userData.userProfileData.phone)
    });
});

And(/^I should see "Email"$/,()=>{
    cy.contains('Email').should('be.visible')
    cy.fixture('banking_data').then((userData)=>{
        cy.xpath("//div[@data-testid='table-email']").should('have.text',userData.userProfileData.email)
    });
});

And(/^I should see "Date of birth"$/,()=>{
    cy.contains('Date of birth').should('be.visible')
    cy.fixture('banking_data').then((userData)=>{
        cy.xpath("//div[@data-testid='table-dateOfBirth']").should('have.text',userData.userProfileData.dob)
    });
});

And(/^I should see "To update your information, please contact us." string$/,()=>{
    cy.fixture('phrases').then((phrase)=>{
        cy.contains(phrase.profileContactUs).should('be.visible')
    });
});

And(/^I should see "Contact us" button$/,()=>{
    cy.xpath("//button[@data-testid='button-undefined']").should('be.visible')
    .should('have.text','Contact us')
});

When(/^I click on "Contact us" button$/,()=>{
    cy.xpath("//button[@data-testid='button-undefined']").click()
});

Then(/^I should see URL contains "contact-us"$/,()=>{
    cy.url().should('include','/contact-us')
})

And(/^I should see "Message"$/,()=>{
    cy.contains('Message').should('be.visible')
});

And(/^I should see "Email" text field$/,()=>{
    cy.contains('Email').should('be.visible')
});

And(/^I should see "Call"$/,()=>{
    cy.contains('Call').should('be.visible')
});


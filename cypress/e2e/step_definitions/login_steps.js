/// <reference types="cypress" />
import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given(/^I login into banking application$/, () => {
    cy.visit('')
    cy.fixture('banking_data').then((userData => {
        cy.login(userData.credentials.email, userData.credentials.password)
    }));
    cy.get('#northbound_action_sms_otp', { timeout: 15000 }).should('be.visible')
    cy.wait(2000)
    cy.request('GET', 'https://mailcatcher.sbx-multichannel-1.dbsdev.sbcp.io/messages').then((response) => {
        let len = response.body.length;
        cy.request('GET', 'https://mailcatcher.sbx-multichannel-1.dbsdev.sbcp.io/messages/' + len + '.plain').then((response) => {
            let resBody = (response.body).toString();
            let otp = resBody.substr(resBody.length - 7).toString()
            cy.log('OTP is->' + otp)
            cy.get('#northbound_action_sms_otp', { timeout: 15000 }).type(otp);
        })
    });
});

Then(/^I logout from the banking application$/, () => {
    cy.xpath("//span[@data-testid='menus.more']", { timeout: 15000 }).click()
    cy.xpath("//span[@data-testid='menus.logout']").click()
})


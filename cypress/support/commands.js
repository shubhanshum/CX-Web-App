
//Custom command to login into banking app
Cypress.Commands.add('login',(email, password)=>{
    cy.get('#username').type(email)
    cy.get('#password').type(password)
    cy.contains('Log In').click()
});

//Custom command to get 2FA OTP from mailcatcher
Cypress.Commands.add('get2faCode',()=>{
    cy.request('GET', 'https://mailcatcher.sbx-multichannel-1.dbsdev.sbcp.io/messages').then((response) => {
        let len = response.body.length;
        cy.log('Length of emails:'+len)
        cy.request('GET', 'https://mailcatcher.sbx-multichannel-1.dbsdev.sbcp.io/messages/' + len + '.plain').then((response) => {
            let resBody = (response.body).toString();
            let otp = resBody.substr(resBody.length - 7).toString()
            cy.log('OTP is->' + otp)
            return cy.wrap(otp)
        })
    });
})
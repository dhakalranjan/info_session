

describe('', () => {
    it('login', () => {
     
        cy.visit(Cypress.env('loginUrl'))
        cy.get(".login-section").eq(0).within(()=>{
            cy.get("form.form.login > fieldset >.form-group > #idToken1").type(Cypress.env('username'))
            cy.get("#idToken2").type(Cypress.env('password'))        })
    });
});
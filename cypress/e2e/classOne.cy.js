describe('Login Page Testing', () => {
    // it('Should be submitted ', () => {
    //     cy.visit("https://ultimateqa.com/complicated-page") 
    //     cy.get("#et_pb_contact_name_23").should('not.exist')
    //     cy.get("#et_pb_contact_name_2").type("ranjan") //this is for name
    //     cy.get('[placeholder="Email Address"]').eq(2).type("ranjan@gmail.com") //this is for email
    //    cy.get("#et_pb_contact_message_2").type("This is class one message")
    //    cy.get('[name="et_pb_contact_captcha_2"]').type("8")
    //    cy.get("[type='submit']").eq(4).click()
    // });
    it('class should not be exist', () => {
 
        cy.visit("https://ultimateqa.com/complicated-page") 
        cy.get("#et_pb_contact_name_2").should('exist')
        cy.get("#et_pb_contact_name_2").should('have.attr','name','et_pb_contact_name_2')
        cy.get("#et_pb_contact_name_2").should('have.class','input').should('be.visible')
        cy.get('#et_pb_contact_name_2').should('be.empty')
       
        cy.url().should('equal',"https://ultimateqa.com/complicated-page")
        cy.url().should('include','/complicated-page')

    });
    it('Second test',() => {
        cy.visit("https://ultimateqa.com/complicated-page") 
        cy.get("#et_pb_contact_name_2").should('exist')
        cy.get("#et_pb_contact_name_2").should('have.attr','name','et_pb_contact_name_2')
        cy.get("#et_pb_contact_name_2").should('have.class','input').should('be.visible')
        cy.get('#et_pb_contact_name_2').should('be.empty')
       
        cy.url().should('equal',"https://ultimateqa.com/complicated-page")
        cy.url().should('include','/complicated-page')
    })

});





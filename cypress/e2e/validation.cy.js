describe('Test with different credentials',()=>{
    
    it('Without Username and Password',()=>{

        cy.visit("/");

        cy.get("#login-button").click();

        cy.get('[data-test="error"]').should('be.visible').and('contain',' Username is required')
    })

    it('With Username and without Password',()=>{

        cy.visit("/");

        cy.get("#user-name").type("standard_user");

        cy.get("#login-button").click();

        cy.get('[data-test="error"]').should('be.visible').and("contain","Password is required");
    })

    it('Wrong username and password',()=>{

        cy.visit("/");

        cy.get("#user-name").type("lllllllllll");
        cy.get("#password").type("12345rfghgfr5t");

        cy.get("#login-button").click();

        cy.get('[data-test="error"]').should("be.visible").and("contain","Username and password do not match any user in this service");
    })
})
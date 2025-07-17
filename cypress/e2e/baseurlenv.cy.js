const username= Cypress.env("username");
const password= Cypress.env("password");


describe('',() =>{

    it ('',( )=>{


        cy.visit("/");

        cy.get("#user-name").type(username);
        cy.get("#password").type(password);
        cy.get("#login-button").click();



    })
})
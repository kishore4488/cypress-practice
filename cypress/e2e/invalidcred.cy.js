describe('',( ) =>{
    it('' ,() => {

        cy.visit('https://www.saucedemo.com');
        cy.get("#user-name").type("user");
        cy.get("#password").type("pass");
        cy.get("#login-button").click();
      
        cy.contains("Epic sadface: Username and password do not match any user in this service")
  .should('be.visible');


    })
})
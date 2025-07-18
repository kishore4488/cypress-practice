describe('Sauce Demo URL Test', () => {
  it('should navigate to inventory page after login', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('#user-name').clear().type('standard_user');  // clears if any prefilled username and types new one
    cy.get('#password').clear().type('secret_sauce');
    cy.get('#login-button').click();

    cy.reload(); //reloads the page 

    cy.title().should('eq','Swag Labs'); // checks whether the title is correct

    // Check if the URL is correct
    cy.url().should('include', '/inventory.html');
  });
});

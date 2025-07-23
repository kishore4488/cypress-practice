describe('', () =>{

    it('',function() {
        cy.fixture('userData').then((user) =>{

            cy.visit('/');

            cy.get("#user-name").type(user.username);
            cy.get("#password").type(user.password);
            cy.get("#login-button").click();



        })


    })
})
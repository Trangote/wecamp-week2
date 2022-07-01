describe('An example test', () => {
    it('should visit', () => {
        cy.visit('https://demo.guru99.com/test/newtours/');
        cy.wait(10000);
        cy.get("input[name='userName']").click();
        cy.get("input[name='userName']").type('tutorial');
        cy.get("input[name='password']").click();
        cy.get("input[name='password']").type('tutorial');
        cy.get("input[name='submit']").click();
        cy.wait(10000);
        cy.get("h3").should('be.visible')
        .and('have.text', "Login Successfully");
        cy.get("h3").contains("Login Successfully");

        cy.get("a[linkText='Flights']").click();
        cy.get("select[name='fromMonth'").select('December').should('have.value', '12');
        cy.get("select[name='fromDay'").select('5').should('have.value', '5');
        cy.get("select[name='toMonth'").select('December').should('have.value', '12');
        cy.get("select[name='toDay'").select('5').should('have.value', '5');
        cy.get("input[name='findFlights']").click();
        cy.wait(10000);

        // cy.get("font").should('be.visible')
        // .and('have.text', "After flight finder - No Seats Avaialble");
        cy.get('font').eq(1)
        cy.get("font").contains("After flight finder - No Seats Avaialble");
    })
})
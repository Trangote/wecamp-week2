describe('Test case 2: Check the login flow (negative flow)', () => {
    it('should visit', () => {
        cy.visit('https://demo.guru99.com/test/newtours/');
        cy.wait(10000);
        cy.get("input[name='userName']").click();
        cy.get("input[name='userName']").type('wrongUsername');
        cy.get("input[name='password']").click();
        cy.get("input[name='password']").type('wrongPassword');
        cy.get("input[name='submit']").click();
        cy.wait(10000);
        cy.get('span:nth-child(3)').contains('Enter your userName and password correct')
    })
})
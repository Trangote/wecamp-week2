describe('Test case 3: Check payment flow (negative case if leaves Expiration Month not selected)', () => {
    it('should visit', () => {
        cy.visit('https://demo.guru99.com/payment-gateway/index.php');
        cy.wait(10000);
        cy.get("input[type='submit']").click();
        cy.get("select[name='month']").select([]);
        cy.get("input[name='submit']").click();
        cy.get('select#month:invalid').should('have.length', 1);
    })
})
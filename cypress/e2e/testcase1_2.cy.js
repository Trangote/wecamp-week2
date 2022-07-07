describe('Test case 1: Check payment flow (positive flow)', () => {
    it('should visit', () => {
        cy.visit('https://demo.guru99.com/payment-gateway/index.php');
        cy.wait(10000);
        cy.get("select[name='quantity']").select('4').should('have.value', '4');
        cy.get("input[type='submit']").click();
        cy.wait(10000);
        cy.get('font:nth-child(2)').contains('$80.00');
        cy.get("input[name='card_nmuber']").type('1234567890123456l');
        cy.get("select[name='month']").select('11').should('have.value', '11');
        cy.get("select[name='year']").select('2026').should('have.value', '2026');
        cy.get("input[name='cvv_code']").type('766');
        cy.get("input[name='submit']").contains('Pay $80.00');
        cy.get("input[name='submit']").click();

        cy.wait(10000);
        cy.get("h2").should('be.visible').and('have.text', "Payment successfull!");
        cy.get("h2").contains("Payment successfull!");
    })
})
describe('Test case 4: Check payment flow (negative case if Card Number had shorter than 16 numbers)', () => {
    it('should visit', () => {
        cy.visit('https://demo.guru99.com/payment-gateway/index.php');
        cy.wait(10000);
        cy.get("input[type='submit']").click();
        cy.get("input[name='card_nmuber']").type('1234567890');
        cy.get("select[name='month']").select('11').should('have.value', '11');
        cy.get("select[name='year']").select('2026').should('have.value', '2026');
        cy.get("input[name='cvv_code']").type('766');
        cy.get("input[name='submit']").click();
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('Check card number is 16 digits!');
         })
    })
})
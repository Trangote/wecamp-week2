describe('Test case 2: Check payment flow (negative case if Card Number had characters)', () => {
    it('should visit', () => {
        cy.visit('https://demo.guru99.com/payment-gateway/index.php');
        cy.wait(10000);
        cy.get("input[type='submit']").click();
        cy.get("input[name='card_nmuber']").type('z');
        cy.get("label[id='message1']").should('be.visible').and('have.text', "Characters are not allowed");
        cy.get("label[id='message1']").contains("Characters are not allowed");
    })
})
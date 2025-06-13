class HomePage {
  validateWelcomeMessage() {
    cy.contains('You are logged in!').should('be.visible');
  }
}
export default new HomePage();

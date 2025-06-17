class HomePage {
  constructor() {
    this.calculatorButton = '#goToCalculator';
  }
  validateWelcomeMessage() {
    cy.contains('You are logged in!').should('be.visible');
  }
  navigateToCalculator() {
    cy.get(this.calculatorButton).click(); // Adjust to your navigation logic
  }

}
export default new HomePage();

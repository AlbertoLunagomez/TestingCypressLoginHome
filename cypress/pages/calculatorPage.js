class CalculatorPage {
  constructor() {
    this.firstNumberInput = '#firstNumber';     // Replace with your actual selector
    this.secondNumberInput = '#secondNumber';   // Replace with your actual selector
    this.operatorSelect = '#operator';          // e.g., select[+ - * /]
    this.calculateButton = '#calculate';        // Replace with actual button selector
    this.resultText = '#result';                // Where result is shown
  }

  visit() {
    cy.visit('/home');
  }

  enterFirstNumber(value) {
    cy.get(this.firstNumberInput).clear().type(value);
  }

  enterSecondNumber(value) {
    cy.get(this.secondNumberInput).clear().type(value);
  }

  chooseOperator(operator) {
    cy.get(this.operatorSelect).select(operator);
  }

  clickCalculate() {
    cy.get(this.calculateButton).click();
  }

  validateResult(expected) {
    cy.get(this.resultText).should('contain', expected);
  }
}

export default new CalculatorPage();

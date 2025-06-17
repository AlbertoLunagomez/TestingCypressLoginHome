import calculatorPage from '../pages/calculatorPage';

describe('Calculator Test', () => {
  beforeEach(() => {
    cy.login();
    calculatorPage.visit(); // Adjust to your app's calculator route
  });

  it('should add two numbers correctly', () => {
    calculatorPage.enterFirstNumber(5);
    calculatorPage.enterSecondNumber(3);
    calculatorPage.chooseOperator('+');
    calculatorPage.clickCalculate();
    calculatorPage.validateResult('8');
  });
});

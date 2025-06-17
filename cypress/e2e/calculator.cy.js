import calculatorPage from '../pages/calculatorPage';

describe('Calculator Test', () => {
    const addSimbol = '+';
    const subtractSimbol = '-';
    const multiplySimbol = '*';
    const divideSimbol = '/';
    
    beforeEach(() => {
        cy.login();
        calculatorPage.visit(); // Adjust to your app's calculator route
    });

    it('should add two numbers correctly', () => {
        calculatorPage.enterFirstNumber(5);
        calculatorPage.enterSecondNumber(3);
        calculatorPage.chooseOperator(addSimbol);
        calculatorPage.clickCalculate();
        calculatorPage.validateResult('8');
    });

    it('should subtract two numbers correctly', () => {
        calculatorPage.enterFirstNumber(8);
        calculatorPage.enterSecondNumber(6);
        calculatorPage.chooseOperator(subtractSimbol);
        calculatorPage.clickCalculate();
        calculatorPage.validateResult('2');
    });

    it('should multiply numbers correctly', () => {
        calculatorPage.enterFirstNumber(5);
        calculatorPage.enterSecondNumber(3);
        calculatorPage.chooseOperator(multiplySimbol);
        calculatorPage.clickCalculate();
        calculatorPage.validateResult('15');
    });

    it('should divide two numbers correctly', () => {
        calculatorPage.enterFirstNumber(8);
        calculatorPage.enterSecondNumber(2);
        calculatorPage.chooseOperator(divideSimbol);
        calculatorPage.clickCalculate();
        calculatorPage.validateResult('4');
    });
});

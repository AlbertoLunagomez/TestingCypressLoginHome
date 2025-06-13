import loginPage from '../pages/loginPage';

describe('Login Test Suite', () => {
  beforeEach(() => {
    cy.fixture('users').as('user');
  });

  it('Should log in with valid credentials', function () {
    loginPage.visit();
    loginPage.fillUsername(this.user.valid.username);
    loginPage.fillPassword(this.user.valid.password);
    loginPage.submit();
    cy.url();
  });
});
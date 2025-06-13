import homePage from '../pages/homePage';

describe('Home Test Suite', () => {
  beforeEach(() => {
    cy.login();
  });

  it('Should display welcome message', () => {
    homePage.validateWelcomeMessage();
  });
});

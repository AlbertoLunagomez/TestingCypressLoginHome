class LoginPage {
  constructor() {
    this.usernameInput = '#username';
    this.passwordInput = '#password';
    this.buttonSubmit = 'button[type="submit"]';
  }

  visit() {
    cy.visit('/login');
  }

  fillUsername(username) {
    cy.get(this.usernameInput).type(username);
  }

  fillPassword(password) {
    cy.get(this.passwordInput).type(password);
  }

  submit() {
    cy.get(this.buttonSubmit).click();
  }
}
export default new LoginPage();

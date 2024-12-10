class LoginPage {
  visit() {
    cy.visit("/login");
  }

  getEmailField() {
    return cy.get("[name='email']");
  }

  getPasswordField() {
    return cy.get("[name='password']");
  }

  getLoginButton() {
    return cy.get("[type='submit']");
  }

  getForgotpassword() {
    return cy.get("[href='/forgotpassword']");
  }

  getNewRegistration() {
    return cy.get("a").contains("You don't have an account yet?");
  }
}

export default LoginPage;

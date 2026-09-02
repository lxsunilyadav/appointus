class Password {
  getNewPassword() {
    return cy.get("[name='password']");
  }

  getShowPassword() {
    return cy.get("[name='password']").siblings("button");
  }

  getConfirmedPassword() {
    return cy.get("[name='confirmpassword']");
  }

  getUpdateButton() {
    return cy.get("[type='submit']");
  }
}

export default Password;

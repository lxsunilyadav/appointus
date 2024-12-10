import LoginPage from "../../support/pageObjects/LoginPage";

describe("Login in application", () => {
  const loginPage = new LoginPage();
  it("Login with valid usernam and password", () => {
    loginPage.visit();
    cy.login("snehasharma@yopmail.com", "Techie@1234");
    cy.wait(3000);
    cy.logout();
  });

  it("Verify required message on usename and passowrd", () => {
    loginPage.visit();
    loginPage.getEmailField().should("have.attr", "aria-invalid", "false");
    loginPage.getPasswordField().should("have.attr", "aria-invalid", "false");
    cy.get("p").contains("Email is required").should("not.exist");
    cy.get("p").contains("Password is required").should("not.exist");
    loginPage.getLoginButton().click();
    cy.get("p").contains("Email is required").should("exist");
    cy.get("p").contains("Password is required").should("exist");
  });

  it("Verify Username and Password is incorrect", () => {
    loginPage.visit();
    cy.get("p")
      .contains("Email or password is not correct.")
      .should("not.exist");
    cy.login("devin@gmail.com", "Techie@1234");
    cy.get("p").contains("Email or password is not correct.").should("exist");
    loginPage.getPasswordField().should("have.value", "");
  });
});

import LoginPage from "../../../support/pageObjects/Login/LoginPage";

describe("Login in application", () => {
  const loginPage = new LoginPage();
  let userData;

  before(() => {
    cy.fixture("loginData").then((data) => {
      userData = data;
    });
  });
  beforeEach(() => {
    loginPage.visit();
  });
  it("Login with valid usernam and password", () => {
    cy.login(
      userData.validCredentials.email,
      userData.validCredentials.password
    );
    cy.wait(3000);
    cy.logout();
  });

  it("Verify required message on usename and passowrd", () => {
    loginPage.getEmailField().should("have.attr", "aria-invalid", "false");
    loginPage.getPasswordField().should("have.attr", "aria-invalid", "false");
    cy.get("p").contains("Email is required").should("not.exist");
    cy.get("p").contains("Password is required").should("not.exist");
    loginPage.getLoginButton().click();
    cy.get("p").contains("Email is required").should("exist");
    cy.get("p").contains("Password is required").should("exist");
  });

  it("Verify Username and Password is incorrect", () => {
    cy.get("p")
      .contains("Email or password is not correct.")
      .should("not.exist");
    cy.login(
      userData.invalidCredentials.email,
      userData.invalidCredentials.password
    );
    cy.get("p").contains("Email or password is not correct.").should("exist");
    loginPage.getPasswordField().should("have.value", "");
    loginPage
      .getEmailField()
      .should("have.value", userData.invalidCredentials.email);
  });

  it("Verify forgot password link", () => {
    loginPage.getForgotpassword().click();
    cy.url().should("include", "/forgotpassword");
    cy.go("back");
  });

  it("Verify signup link", () => {
    loginPage.getNewRegistration().click();
    cy.url().should("include", "/register");
    cy.go("back");
  });
});

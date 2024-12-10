import LoginPage from "./pageObjects/LoginPage";
import Navbar from "./pageObjects/Navbar";

const loginPage = new LoginPage();
const navbar = new Navbar();

Cypress.Commands.add("login", (username, password) => {
  loginPage.getEmailField().type(username);
  loginPage.getPasswordField().type(password);
  loginPage.getLoginButton().click();
});

Cypress.Commands.add("logout", () => {
  navbar.getUserProfile().click({ force: true });
  navbar.getMenu().should("exist");
  navbar.getLogoutButton().click();
});

import LoginPage from "./pageObjects/Login/LoginPage";
import Navbar from "./pageObjects/Navbar/Navbar";

const loginPage = new LoginPage();
const navbar = new Navbar();

Cypress.Commands.add("login", (username, password) => {
  loginPage.visit();
  loginPage.getEmailField().type(username);
  loginPage.getPasswordField().type(password);
  loginPage.getLoginButton().click();
});

Cypress.Commands.add("logout", () => {
  navbar.getUserProfile().click({ force: true });
  navbar.getMenu().should("exist");
  navbar.getLogoutButton().click();
});

Cypress.Commands.add("getInput", (name) => {
  cy.get(`input[name= '${name}']`);
});

Cypress.Commands.add("getDay", (day) => {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tueday";
    case 3:
      return "wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Invalid day";
  }
});

Cypress.Commands.add("getMonth", (month) => {
  switch (month) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
    default:
      return "Invalid month";
  }
});

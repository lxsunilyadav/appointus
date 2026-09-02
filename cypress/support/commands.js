<<<<<<< HEAD
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
=======
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

>>>>>>> 8dd236cb72e136ad48a85e7ddf004dc086170d4b

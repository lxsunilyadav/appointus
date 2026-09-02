import LoginPage from "../../../support/pageObjects/Login/LoginPage";
import Navbar from "../../../support/pageObjects/Navbar/Navbar";
import SideMenu from "../../../support/pageObjects/SideMenu/SideMenu";
import MyProfile from "../../../support/pageObjects/Setting/MyProfile";
import PlanBilling from "../../../support/pageObjects/Setting/PlanBilling";

describe("Verify my profile", () => {
  const loginPage = new LoginPage();
  const navbar = new Navbar();
  const sideMenu = new SideMenu();
  const profileSection = new MyProfile();
  const planBilling = new PlanBilling();
  let userData;

  before(() => {
    cy.fixture("loginData").then((data) => {
      userData = data;
      console.log("userData", userData);

      // loginPage.visit();
      cy.visit("/login");
      cy.login(
        userData.validCredentials.email,
        userData.validCredentials.password
      );
      cy.url().should("include", "/calender");
      navbar.getName().should("contain", userData.validCredentials.firstname);
      navbar.getUsername().should("contain", userData.validCredentials.email);
      sideMenu.selectModule("settings/profile");
      profileSection.getTab("Plan & Billing").click();
    });
  });

  it("Verify data in profile", () => {
    sideMenu.getChangePlan().click();
    cy.get(".bg-white > .text-center").click("topRight");
    cy.getInput("firstname").should(
      "have.value",
      userData.validCredentials.firstname
    );
    cy.getInput("lastname").should(
      "have.value",
      userData.validCredentials.lastname
    );
    cy.getInput("email")
      .should("have.value", userData.validCredentials.email)
      .and("be.disabled");
    cy.getInput("phone").should(
      "contain.value",
      userData.validCredentials.phone
    );
    profileSection
      .getCountry()
      .should("have.value", userData.validCredentials.country);
    profileSection
      .getTimezone()
      .should("have.value", userData.validCredentials.timezone);
    profileSection.getSaveButton();
    cy.logout();
  });
});

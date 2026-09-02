class MyProfile {
  getTabLenght() {
    return cy
      .contains("p", "Manage your account")
      .parent()
      .siblings("div")
      .children();
  }

  getSelectTab(tab) {
    return cy.get("div div a").contains(tab);
  }

  getfirstname() {
    return cy.getInput("firstname");
  }

  getfirstname() {
    return cy.getInput("lastname");
  }

  getfirstname() {
    return cy.getInput("email");
  }

  getfirstname() {
    return cy.getInput("phone");
  }

  getCountry() {
    return cy.get("select").eq(0);
  }

  getTimezone() {
    return cy.get("select").eq(1);
  }

  getSaveButton() {
    return cy.get("[type='submit']");
  }
}

export default MyProfile;

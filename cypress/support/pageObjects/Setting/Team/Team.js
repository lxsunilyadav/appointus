class Team {
  getMembers() {
    return cy.get("table").siblings("ui").children();
  }
  getAddButton() {
    return cy.contains("button", "Add team");
  }
  getMemberEmail(mail) {
    return cy.get("label").siblings("p").contains(mail);
  }
  getMemberName(mail) {
    return cy.contains("p", mail).siblings("h3");
  }
  getMemberRole(mail) {
    return cy.contains("p", mail).siblings("label").find("span").eq(0);
  }
  getMemberImage(mail) {
    return cy.contains("p", mail).parent().siblings("div").find("div");
  }
  getMemberActive(mail) {
    return cy
      .contains("p", mail)
      .parent()
      .siblings("div")
      .find("div")
      .siblings("span");
  }
  getMemberStatus(mail) {
    return cy
      .contains("p", mail)
      .parent()
      .parent()
      .siblings("div")
      .find("button")
      .eq(0);
  }
  getMemberUpdate(mail, action) {
    cy.contains("p", mail)
      .parent()
      .parent()
      .siblings("div")
      .find("button")
      .eq(1)
      .click();
    return cy.contains("span", action);
  }
  getJoinedDate() {
    return cy.contains("label", "Joined at");
  }
  getMemberDetails() {
    return cy.contains("button", "View details");
  }
}

export default Team;

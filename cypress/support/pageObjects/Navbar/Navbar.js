class Navbar {
  getUserProfile() {
    return cy.get("[id='radix-:R1lbpla:']");
  }

  getName() {
    return cy.get("strong");
  }

  getUsername() {
    return cy.get("strong").next();
  }

  getMenu() {
    return cy.get("[id='radix-:R1lbplaH1:']");
  }

  getSupport() {
    return cy.get("[id='radix-:R1lbplaH1:']").children().eq(0);
  }

  getCopyLink() {
    return cy.get("[id='radix-:R1lbplaH1:']").children().eq(1);
  }

  getLogoutButton() {
    return cy.get("[id='radix-:R1lbplaH1:']").children().eq(3);
  }
}

export default Navbar;

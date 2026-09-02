class SideMenu {
  getModule(module) {
    return cy.get(`ul li a[href='/${module}']`);
  }

  selectModule(module) {
    return (
      cy.get(`ul li a[href='/${module}']`).click(),
      cy.url().should("include", module)
    );
  }

  getChangePlan() {
    return cy.get("article");
  }
}

export default SideMenu;

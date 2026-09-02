class BusinessCategories {
  getSelectedService() {
    return cy.contains("label", "Services provided").siblings("button");
  }

  getServicesList() {
    return cy.get("div[role='group']").find("div");
  }

  selectService(value) {
    return this.getServicesList().contains(value).click();
  }

  getSubCategoryLabel() {
    return cy.get("select").siblings("label");
  }

  getSelectedSubcategory() {
    return cy.get("select").siblings("button");
  }

  selectSubCategory() {
    // let value = cy.get("option").eq(0);
    return cy.get("select").select(2, { force: true });
  }

  getPreviousButton() {
    return cy.contains("button", "Previous step");
  }

  getSaveButton() {
    return cy.contains("button", "Save & Go Next");
  }
}

export default BusinessCategories;

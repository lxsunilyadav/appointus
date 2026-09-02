class BusinessType {
  getBusinessType(type) {
    return cy.contains("label", type).parent().siblings("button");
  }
  getIndividualButton() {
    return this.getBusinessType("An Individual");
  }

  getMultiBusinessButton() {
    return this.getBusinessType("Multi Staff Business");
  }

  getSaveButton() {
    return cy.contains("button", "Save & Go Next");
  }
}

export default BusinessType;

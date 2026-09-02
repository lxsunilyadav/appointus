class AddStaff {
  getTitle() {
    return cy
      .get("form")
      .siblings("h2")
      .should("have.text", "Create your works at your business?");
  }

  getNameInput(index) {
    return cy.get(`[name= 'worker.${index}.name']`);
  }

  getEmailInput(index) {
    return cy.get(`[name= 'worker.${index}.email']`);
  }

  getMobileInput(index) {
    return cy.get(`[name= 'worker.${index}.mobile']`);
  }

  getCountryCode(index) {
    return cy.get(`[name= 'worker.${index}.name']`).siblings("span");
  }

  getRowLenght() {
    return cy.get("form").find(">div").eq(0).children().its("length");
  }

  getDefaultRole(index) {
    this.getRow().eq(index).find(">div").eq(4).find(">button span");
  }

  getSelectRole(index, value) {
    this.getRow()
      .eq(index)
      .find(">div")
      .eq(4)
      .find("select")
      .select(value, { force: true });
  }

  getDeleteIcon(index) {
    this.getRow().eq(index).find(">button");
  }

  getAddMore() {
    return cy.contains("button", "Add team");
  }

  getCancelButton() {
    return cy.contains("button", "Cancel");
  }

  getSaveButton() {
    return cy.contains("button", "Save");
  }

  getValidationMessge(index) {
    return cy.wrap({
      name: this.getNameInput(index)
        .siblings("p")
        .contains("Please enter staff name"),
      email: this.getEmailInput(index)
        .siblings("p")
        .contains("Invalid email address"),
      phone: this.getServicePrice(index)
        .parent()
        .siblings("p")
        .contains("Mobile is required"),
    });
  }
}

export default AddStaff;

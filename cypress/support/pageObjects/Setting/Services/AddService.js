class AddService {
  getTitle() {
    return cy.get("form").siblings("h2").text().trim();
    // .should("contains", "Create your own service menu");
  }
  getServiceNameInput(index) {
    return cy.get(`[name= 'service.${index}.title']`);
  }
  getServicePriceInput(index) {
    return cy.get(`[name= 'service.${index}.price']`);
  }
  getCountryCode(index) {
    return cy.get(`[name= 'service.${index}.price']`).siblings("span");
  }
  getRow() {
    return cy.get("form").find("div").eq(0).children();
  }
  getDefaultColor(index) {
    return this.getRow().eq(index).find("div").eq(1).find("button span");
  }
  getSelectColor(index, value) {
    return this.getRow()
      .eq(index)
      .find("div")
      .eq(1)
      .find("select")
      .select(value, { force: true });
  }
  getDefaultDuration(index) {
    return this.getRow().eq(index).find("div").eq(3).find("button");
  }
  getSelectDuration(index, value) {
    return this.getRow()
      .eq(index)
      .find("div")
      .eq(3)
      .find("select")
      .select(value, { force: true });
  }
  getDeleteIcon(index) {
    return this.getRow().eq(index).find("div").eq(5).find("button");
  }
  getAddMore() {
    return cy.contains("button", "Add service");
  }
  getCancelButton() {
    return cy.contains("button", "Cancel");
  }
  getSaveButton() {
    return cy.contains("button", "Save");
  }
  getValidationMessge(index) {
    return {
      serviceName: this.getServiceNameInput(index)
        .siblings("p")
        .contains("Please type service"),
      servicePrice: this.getServicePriceInput(index)
        .parent()
        .siblings("p")
        .contains("Requied this field"),
    };
  }
}

export default AddService;

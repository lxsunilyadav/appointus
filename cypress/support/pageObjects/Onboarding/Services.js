class Services {
  getTitle() {
    return cy
      .get("form")
      .siblings("h2")
      .then(($el) => {
        let title = $el.text().trim();
        expect(title).to.eq("Create your own service menu");
      });
  }

  getRowLenght() {
    return cy.get("form").find(">div").eq(0).find(">div").its("length");
  }

  getRow(index) {
    return cy.get("form").find(">div").eq(0).find(">div").eq(index);
  }

  getDefaultColor(index) {
    return this.getRow(index).find(">div").eq(0).find("button span");
  }

  selectColor(index, value) {
    return this.getRow(index)
      .find(">div")
      .eq(0)
      .find("select")
      .select(value, { force: true });
  }

  getServiceName(index) {
    return cy.get(`input[name='service.${index}.title']`);
  }

  getDefaultDuration(index) {
    return this.getRow(index)
      .find(">div")
      .eq(2)
      .find("button span")
      .invoke("text")
      .then((text) => text.trim());
  }

  selectDuration(index, value) {
    return this.getRow(index)
      .find(">div")
      .eq(2)
      .find("select")
      .select(value, { force: true });
  }

  getServicePrice(index) {
    return cy.get(`input[name='service.${index}.price']`);
  }

  getDeleteIcon(index) {
    return this.getRow(index).find(">div").eq(4).find("button");
  }

  getAddMore() {
    return cy.contains("button", "Add service");
  }

  getSaveButton() {
    return cy.contains("button", "Save & Go Next");
  }

  getPreviousButton() {
    return cy.contains("button", "Previous step");
  }

  getValidationMessge(index) {
    return cy.wrap({
      serviceName: this.getServiceName(index)
        .siblings("p")
        .contains("Please type service"),
      servicePrice: this.getServicePrice(index)
        .parent()
        .siblings("p")
        .contains("Requied this field"),
    });
  }
}

export default Services;

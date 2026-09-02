class LocationDetails {
  getBusinessName() {
    return cy.get("input[name='name']");
  }

  getURL() {
    return cy.get("[placeholder='URL']");
  }

  getCreateButton() {
    return cy.contains("button", "Create");
  }

  getLocationName() {
    return cy.get("input[name='locationName']");
  }

  getAddress() {
    return cy.get("[name='address']");
  }
  getDropdown(label) {
    return cy.contains("label", label).siblings("button span");
  }

  selectValue(label, value) {
    return cy
      .contains("label", label)
      .siblings("select")
      .select(value, { force: true });
  }

  getCountry() {
    return this.getDropdown("Country");
  }

  getState() {
    return this.getDropdown("State");
  }

  getCity() {
    return this.getDropdown("City");
  }

  getTimezone() {
    return this.getDropdown("Timezone");
  }

  selectCountry(value) {
    return this.selectValue("Country", value);
  }

  selectState(value) {
    return this.selectValue("State", value);
  }

  selectCity(value) {
    return this.selectValue("City", value);
  }

  selectTimezone(value) {
    return this.selectValue("Timezone", value).trigger("change", {
      force: true,
    });
  }

  getZipCode() {
    return cy.get("input[name='zip']");
  }

  getSaveButton() {
    return cy.contains("button", "Save");
  }

  getValidationMessge() {
    return cy.wrap({
      businessName: this.getBusinessName()
        .siblings("p")
        .contains("Please enter business name"),
      businessURL: cy
        .contains("label", "Booking page URL")
        .parent()
        .siblings("div")
        .find("p"),
      locationName: this.getLocationName()
        .siblings("p")
        .contains("This field is required"),
      zipcode: this.getZipCode()
        .siblings("p")
        .contains("Invalid ZIP code for the selected country"),
    });
  }
}

export default LocationDetails;

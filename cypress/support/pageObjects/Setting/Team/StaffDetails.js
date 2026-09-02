class StaffDetails {
  getSelectTab(tab) {
    return cy.contains("button", tab);
  }

  getStaffImage() {
    return cy
      .contains("label", "Vacation entitlement")
      .parent()
      .parent()
      .siblings("div")
      .eq(0);
  }

  getTotalVacation() {
    return cy
      .contains("label", "Vacation entitlement")
      .siblings("strong")
      .invoke("text")
      .then((text) => text.trim());
  }

  getRemainingVacation() {
    return cy
      .contains("label", "Vacation remaining")
      .siblings("strong")
      .invoke("text")
      .then((text) => text.trim());
  }

  isStaffImage() {
    return this.getStaffImage()
      .find("img")
      .its("length")
      .then((length) => length > 0);
  }

  getProfileText() {
    return this.getStaffImage()
      .invoke("text")
      .then((text) => text.trim());
  }

  getStaffName() {
    return cy
      .contains("label", "Vacation entitlement")
      .parent()
      .parent()
      .siblings("div")
      .eq(1)
      .find("h3")
      .invoke("text")
      .then((text) => text.trim());
  }

  getStaffAddress() {
    return cy
      .contains("label", "Vacation entitlement")
      .parent()
      .parent()
      .siblings("div")
      .eq(1)
      .find("p")
      .invoke("text")
      .then((text) => text.trim());
  }

  getFirstName() {
    return cy.getInput("firstname");
  }

  getEmail() {
    return cy.getInput("email");
  }

  getPhone() {
    return cy.getInput("phone");
  }

  getCountryCode() {
    return cy.getInput("phone").siblings("span");
  }

  getDefaultLocation() {
    return cy
      .contains("label", "Location name")
      .parent()
      .siblings("div")
      .find("button");
  }

  getSelectLocation(value) {
    return cy
      .contains("label", "Location name")
      .parent()
      .siblings("div")
      .find("select")
      .select(value, { force: true });
  }

  getTodayStatus() {
    return cy
      .contains("label", "Working hours")
      .parent()
      .siblings("div")
      .find("button");
  }

  getWorkingHoursSelector(day, rowIndex) {
    return cy
      .contains("label", "Working hours")
      .parent()
      .siblings("div")
      .find("div")
      .eq(day)
      .find("div")
      .eq(rowIndex);
  }

  getWorkingHours(day) {
    return this.getWorkingHoursSelector(day, 0).then(($selector) => {
      return {
        day: $selector.find("div").eq(0).text().trim(),
        startTime: $selector.find("div").eq(1).text().trim(),
        endTime: $selector.find("div").eq(3).text().trim(),
      };
    });
  }

  getBreakHours(day) {
    return this.getWorkingHoursSelector(day, 1)
      .find("div")
      .eq(1)
      .then(($selector) => {
        return {
          breakStartTime: $selector.find("div").eq(1).text().trim(),
          breakEndTime: $selector.find("div").eq(3).text().trim(),
        };
      });
  }

  getBackButton() {
    return cy.contains("button", "Back");
  }

  getSaveButton() {
    return cy.contains("button", "Save");
  }
}

export default StaffDetails;

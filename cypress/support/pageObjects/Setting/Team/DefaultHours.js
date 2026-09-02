class DefaultHours {
  getTitle() {
    return cy.get("form div div div label");
  }
  getNumberofDuration() {
    return cy.get("form div").find("div").eq(1).find("div").eq(0).find("label");
  }
  getDurationSection(duration) {
    return cy.get(`label[for="${duration} mins"]`);
  }
  getCheckbox() {
    return this.getDurationSection().find("span").eq(0).find("button").eq(0);
  }
  getDurationTitle() {
    return this.getDurationSection()
      .find("h3")
      .eq(0)
      .invoke("text")
      .then((text) => text.trim());
  }
  getDefaultEventType(duration) {
    return this.getDurationSection(duration)
      .find("span")
      .eq(1)
      .find("button")
      .eq(0)
      .find("span")
      .eq(0)
      .invoke("text")
      .then((text) => text.trim());
  }
  selectEventType(duration, value) {
    return this.getDurationSection(duration)
      .find("span")
      .eq(1)
      .find("select")
      .select(value, { force: true });
  }
  getBookingPage(duration) {
    return this.getDurationSection(duration).find("a").eq(0);
  }
  openShareLinkPopUp(duration) {
    return this.getDurationSection(duration).find("button").eq(0).click();
  }
  closeShareLinkPopUp() {
    return cy.contains("h2", "Share link").siblings("button").click();
  }
  getShareLink(duration, option) {
    this.openShareLinkPopUp(duration);
    return cy.contains("button", option);
  }
  getBackButton() {
    return cy.contains("button", "Back");
  }
  getSaveButton() {
    return cy.contains("button", "Save");
  }
}

export default DefaultHours;

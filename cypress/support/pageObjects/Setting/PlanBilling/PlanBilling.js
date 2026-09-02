class PlanBilling {
  getPaymentAmount() {
    return cy.contains("h2", "Payment").siblings("span");
  }

  getUpgradePlanButton() {
    return cy.contains("button", "Upgrade plan");
  }

  getAddUsersButton() {
    // return cy.contains("h2 span", "Team User(s)").siblings("button");
    return cy.contains("button", "Add users");
  }

  getTotalUsers() {
    return cy
      .contains("span", "Team User(s)")
      .parent()
      .siblings("div")
      .eq(1)
      .find("i")
      .eq(1);
  }

  getUsedUsers() {
    return cy
      .contains("span", "Team User(s)")
      .parent()
      .siblings("div")
      .eq(1)
      .find("i")
      .eq(2);
  }

  getTotalAppointment() {
    return cy
      .contains("h2", "Appointment")
      .siblings("div")
      .eq(1)
      .find("i")
      .eq(1);
  }

  getUsedAppointment() {
    return cy
      .contains("h2", "Appointment")
      .siblings("div")
      .eq(1)
      .find("i")
      .eq(2);
  }

  getTotalCRM() {
    return cy.contains("h2", "CRM").siblings("div").eq(1).find("i").eq(1);
  }

  getUsedCRM() {
    return cy.contains("h2", "CRM").siblings("div").eq(1).find("i").eq(2);
  }

  getTotalEmails() {
    return cy.contains("h2", "Emails").siblings("div").eq(1).find("i").eq(1);
  }

  getUsedEmails() {
    return cy.contains("h2", "Emails").siblings("div").eq(1).find("i").eq(2);
  }

  getTotalSMS() {
    return cy.contains("h2", "SMS").siblings("div").eq(1).find("i").eq(1);
  }

  getUsedSMS() {
    return cy.contains("h2", "SMS").siblings("div").eq(1).find("i").eq(2);
  }

  getAddPaymentMethod() {
    return cy.contains("button", "New payment method");
  }

  getCardExpDate() {
    return cy.contains("label", "VISA").siblings("p").eq(1);
  }

  getNumberofPayment() {
    return cy.get("table tbody").children();
  }

  getLastPaymentDate() {
    return cy.get("table tbody tr").find("td").eq(1);
  }

  getLastPaymentAmount() {
    return cy.get("table tbody tr").find("td").eq(2);
  }
}

export default PlanBilling;

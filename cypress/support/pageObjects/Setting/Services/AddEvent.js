import DatePeaker from "../../DatePeaker/DatePeaker";

let datepicker = new DatePeaker();
class AddEvent {
  getName() {
    return cy.getInput("title");
  }

  getDescription() {
    return cy.get("[name='description']");
  }

  getCost() {
    return cy.getInput("cost");
  }

  getSlot() {
    return cy.getInput("slot");
  }

  getLocation() {
    return cy.contains("label", "Location").parent().siblings("button");
  }

  selectLocation(value) {
    return cy
      .contains("label", "Location")
      .parent()
      .siblings("select")
      .select(value, { force: true });
  }

  getDateInputs() {
    const duration = cy
      .contains("label", "Date")
      .parent()
      .siblings("div")
      .find("div");
    return {
      startDateInput: duration.eq(0).find("span input"),
      endDateInput: duration.eq(1).find("span input"),
    };
  }

  getStartDate() {
    this.getDate().startDateInput.click();
    return {
      date: datepicker.getCurrentDate(),
      month: datepicker.getCalendarMonth(),
      year: datepicker.getCalendarYear(),
    };
  }
  getEndDate() {
    this.getDate().endDateInput.click();
    return {
      date: datepicker.getCurrentDate(),
      month: datepicker.getCalendarMonth(),
      year: datepicker.getCalendarYear(),
    };
  }

  getAllDay() {
    return cy
      .contains("label", "AllDay")
      .parent()
      .siblings("div")
      .find("button");
  }
}

export default AddEvent;

import DatePeaker from "../../DatePeaker/DatePeaker";
let datepicker = new DatePeaker();

class TimeOff {
  getAddTimeOff() {
    return cy.contains("button", "Add time off");
  }

  isLeaveApplied() {
    return cy.get("ul li div div").then(($div) => {
      return !$div.text().includes("No results found");
    });
  }

  getLeaveDetails(index) {
    const leaveItem = cy.get("ul").find("li").eq(index);
    return {
      title: leaveItem.find("div").eq(0).find("h2"),
      startDate: leaveItem.find("div").eq(0).find("p").first(),
      endDate: leaveItem.find("div").eq(0).find("p").last(),
      editButton: leaveItem.find("div").eq(1).find("button").eq(0),
      deleteButton: leaveItem.find("div").eq(1).find("button").eq(1),
    };
  }

  openPopup(type, index) {
    const popupMethods = {
      delete: this.openDeletePopup,
      edit: this.openEditPopup,
    };
    return popupMethods[type](index);
  }

  openDeletePopup(index) {
    this.getLeaveDetails(index).deleteButton.click();
    cy.get("h2").contains("Delete time off").should("be.visible");
  }

  openEditPopup(index) {
    this.getLeaveDetails(index).editButton.click();
    cy.get("h2").contains("Update").should("be.visible");
  }

  openAddPopup() {
    this.getAddTimeOff().click();
    cy.get("h2").contains("Add").should("be.visible");
  }

  getLeaveInput(type) {
    const inputs = {
      title: () => cy.get("[name='name']"),
      startDate: () => this.getLeaveStartDateInput(),
      endDate: () => this.getLeaveEndDateInput(),
      closeButton: () => this.getLeaveCloseButton(),
      setButton: () => this.getLeaveSetTimeButton(),
    };
    return inputs[type]();
  }

  getLeaveStartDateInput() {
    return cy
      .contains("label", "Leave duration")
      .parent()
      .siblings("div")
      .find("span")
      .eq(0);
  }

  getLeaveEndDateInput() {
    return cy
      .contains("label", "Leave duration")
      .parent()
      .siblings("div")
      .find("span")
      .eq(1);
  }

  getLeaveCloseButton() {
    return cy.contains("button", "Close");
  }

  getLeaveSetTimeButton() {
    return cy.contains("button", "Set time off");
  }

  getCalendarStartDate() {
    this.getLeaveStartDateInput().click();
    return datepicker.getCalendarDate();
  }

  getCalendarEndDate() {
    this.getLeaveEndDateInput().click();
    return datepicker.getCalendarDate();
  }

  getCalendarStartMonth() {
    this.getLeaveStartDateInput().click();
    return datepicker.getCalendarMonth();
  }

  getCalendarEndMonth() {
    this.getLeaveEndDateInput().click();
    return datepicker.getCalendarMonth();
  }

  getCalendarStartYear() {
    this.getLeaveStartDateInput().click();
    return datepicker.getCalendarYear();
  }

  getCalendarEndYear() {
    this.getLeaveEndDateInput().click();
    return datepicker.getCalendarYear();
  }

  getCurrentDate() {
    this.getLeaveStartDateInput().click();
    return datepicker.getCurrentDate();
  }
}

export default TimeOff;

// import DatePeaker from "../../DatePeaker/DatePeaker";
// let datepicker = new DatePeaker();

// class TimeOff {
//   getAddTimeOff() {
//     return cy.contains("button", "Add time off");
//   }
//   isLeaveApplied() {
//     return cy.get("ul li div div").then(($div) => {
//       return !$div.text().includes("No results found");
//     });
//   }
//   getTotalLeaves() {
//     return cy.get("ul").find("li");
//   }
//   getLeaveTitle(index) {
//     return cy.get("ul").find("li").eq(index).find("div").eq(0).find("h2");
//   }
//   getLeaveStartDate(index) {
//     return cy.get("ul").find("li").eq(index).find("div").eq(0).find("p");
//   }
//   getLeaveEndDate(index) {
//     return cy.get("ul").find("li").eq(index).find("div").eq(0).find("p");
//   }
//   getEdit(index) {
//     return cy
//       .get("ul")
//       .find("li")
//       .eq(index)
//       .find("div")
//       .eq(1)
//       .find("button")
//       .eq(0);
//   }
//   getDelete(index) {
//     return cy
//       .get("ul")
//       .find("li")
//       .eq(index)
//       .find("div")
//       .eq(1)
//       .find("button")
//       .eq(1);
//   }
//   openDeletePopup(index) {
//     this.getDelete(index).click();
//     cy.get("h2").contains("Delete time off").should("be.visible");
//   }
//   getConfirmedDeleteButton(index) {
//     this.openDeletePopup(index);
//     return cy.contains("h2", "Delete time off").siblings("div").find("button");
//   }

//   getConfirmedCrossButton(index) {
//     this.openDeletePopup(index);
//     return cy.contains("h2", "Delete time off").find("span");
//   }
//   openEditPopup(index) {
//     this.getEdit(index).click();
//     cy.get("h2").contains("Update").should("be.visible");
//   }
//   openAddPopup() {
//     this.getAddTimeOff().click();
//     cy.get("h2").contains("Add").should("be.visible");
//   }
//   getLeaveTitleInput() {
//     return cy.get("[name='name']");
//   }
//   getLeaveStartDateInput() {
//     return cy
//       .contains("label", "Leave duration")
//       .parent()
//       .siblings("div")
//       .find("span")
//       .eq(0);
//   }
//   getLeaveEndDateInput() {
//     return cy
//       .contains("label", "Leave duration")
//       .parent()
//       .siblings("div")
//       .find("span")
//       .eq(1);
//   }
//   getLeaveCloseButton() {
//     return cy.contains("button", "Close");
//   }
//   getLeaveSetTimeButton() {
//     return cy.contains("button", "Set time off");
//   }
//   getCalendarStartMonth() {
//     this.getLeaveStartDateInput().click();
//     return datepicker.getCalendarStartMonth();
//   }
//   getCalendarStartDate() {
//     this.getLeaveStartDateInput().click();
//     return datepicker.getCalendarStartDate();
//   }
//   getCalendarStartYear() {
//     this.getLeaveStartDateInput().click();
//     return datepicker.getCalendarStartYear();
//   }
//   getCalendarEndMonth() {
//     this.getLeaveEndDateInput().click();
//     return datepicker.getCalendarEndMonth();
//   }
//   getCalendarEndDate() {
//     this.getLeaveEndDateInput().click();
//     return datepicker.getCalendarEndDate();
//   }
//   getCalendarEndYear() {
//     this.getLeaveEndDateInput().click();
//     return datepicker.getCalendarEndYear();
//   }
//   getCurrentDate() {
//     this.getLeaveStartDateInput().click();
//     return datepicker.getCurrentDate();
//   }
// }

// export default TimeOff;

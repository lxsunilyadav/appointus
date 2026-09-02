class DatePeaker {
  // getCalendarMonth(yearIndex) {
  //   return cy.get("[data-pc-section='title']").find("button").eq(yearIndex);
  // }
  getCalendarMonth() {
    return cy.get("[data-pc-section='title']").find("button").eq(0);
  }

  getCalendarDate() {
    return cy
      .get("span[aria-selected='true']")
      .invoke("text")
      .then((text) => {
        let date = Number(text.trim());
        expect(date).to.be.a("number", "Expected a valid number for the date");
        return date;
      });
  }

  getCalendarYear() {
    return cy.get("[data-pc-section='title']").find("button").eq(1);
  }
  // getCalendarYear(yearIndex) {
  //   return cy.get("[data-pc-section='title']").find("button").eq(yearIndex);
  // }

  getCurrentDate() {
    let currentDate = new Date();
    let todayDate = currentDate.getDate();
    cy.get(`[aria-label='${todayDate}']`).should(
      "have.class",
      "p-datepicker-today p-2"
    );
  }
}

export default DatePeaker;

// class DatePeaker {
//   getCalendarStartMonth() {
//     return cy.get("[data-pc-section='title']").find("button").eq(0);
//   }
//   getCalendarStartDate() {
//     cy.get("span[aria-selected='true']")
//       .invoke("text")
//       .then((text) => {
//         let startDate = Number(text.trim());
//         expect(startDate).to.not.be.NaN;
//         return startDate;
//       });
//   }
//   getCalendarStartYear() {
//     return cy.get("[data-pc-section='title']").find("button").eq(1);
//   }
//   getCalendarEndMonth() {
//     return cy.get("[data-pc-section='title']").find("button").eq(0);
//   }
//   getCalendarEndDate() {
//     cy.get("span[aria-selected='true']")
//       .invoke("text")
//       .then((text) => {
//         let endDate = Number(text.trim());
//         expect(endDate).to.not.be.NaN;
//         return endDate;
//       });
//   }
//   getCalendarEndYear() {
//     return cy.get("[data-pc-section='title']").find("button").eq(1);
//   }
//   getCurrentDate() {
//     let currentDate = new Date();
//     let todayDate = currentDate.getDate();
//     cy.get(`[aria-label='${todayDate}']`).should(
//       "have.attr",
//       "class",
//       "p-datepicker-today p-2"
//     );
//   }
// }

// export default DatePeaker;

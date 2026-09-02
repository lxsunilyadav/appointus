describe("Verify meeting screen from customer side", () => {
  const getDay = (day) => {
    switch (day) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tueday";
      case 3:
        return "wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        return "Invalid day";
    }
  };

  const getMonth = (month) => {
    switch (month) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
      default:
        return "Invalid month";
    }
  };
  const calculateDuration = (time) => {
    let durations = [15, 30, 45, 60];
    return durations.includes(time);
  };
  let meetingDuration = 30;
  let meetingType = "Google Meet";
  let staffName = "Devin Thomas";
  let staffDesignation = "Group of CEO" || "";

  beforeEach(() => {
    cy.visit(
      "https://trt.dev.book-me.co/devin-thomas?type=meeting&time=" +
        meetingDuration
    );
  });
  it("To verify staff name", () => {
    cy.get("h2>strong").should("have.text", staffName);
    cy.get("[class='main-heaing']").should("contain.text", staffName);
    cy.get("[class='main-heaing']")
      .siblings("p")
      .should("contain.text", staffName);
  });

  it("To verify designation of staff who have designation", () => {
    cy.get("p[class='role']").should("have.text", staffDesignation);
    cy.get("[class='main-heaing']")
      .siblings("p")
      .should("contain.text", staffDesignation);
  });

  it("To verify designation of staff who don't have designation", () => {
    cy.get("p[class='role']").should("have.text", "");
  });

  it("To verify staff who have profile img", () => {
    cy.get("img[class='img-fluid rounded-2xl']").should("exist");
  });

  it("To verify staff who don't have profile img", () => {
    cy.get("img[class='img-fluid rounded-2xl']").should("not.exist");
  });

  it("To verify staff meeting duration", () => {
    let duration = calculateDuration(meetingDuration) ? meetingDuration : 15;
    cy.log(duration);
    cy.get("[class='flex items-center gap-2']")
      .eq(0)
      .find("p")
      .should("contain.text", duration);
  });

  it("To verify staff meeting type", () => {
    cy.get("[class='flex items-center gap-2']")
      .eq(1)
      .find("p")
      .should("contain.text", meetingType);
  });

  it("To verify default date", () => {
    let date = new Date().getDate();
    let day = getDay(new Date().getDay());
    let month = getMonth(new Date().getMonth());
    let year = new Date().getFullYear();

    cy.get("[class='SelectedMeetingDate']")
      .should("contain.text", date)
      .and("contain.text", day.slice(0, 3))
      .and("contain.text", month.slice(0, 3))
      .and("contain.text", year);

    cy.get(".datepicker-days thead th.datepicker-switch").should(
      "have.text",
      month + " " + year
    );

    cy.get("div.datepicker-days")
      .find("td.active.day")
      .should("contain.text", date);
  });

  it("To verify previous button", () => {
    cy.get(".datepicker-days thead th.prev").click();

    let month = getMonth(
      new Date().getMonth() === 0 ? 11 : new Date().getMonth() - 1
    );
    let year =
      new Date().getMonth() === 0
        ? new Date().getFullYear() - 1
        : new Date().getFullYear();

    cy.get(".datepicker-days thead th.datepicker-switch").should(
      "have.text",
      month + " " + year
    );
  });

  it("To verify previous button", () => {
    cy.get(".datepicker-days thead th.next").click();

    let month = getMonth(
      new Date().getMonth() === 11 ? 0 : new Date().getMonth() + 1
    );
    let year =
      new Date().getMonth() === 11
        ? new Date().getFullYear() + 1
        : new Date().getFullYear();

    cy.get(".datepicker-days thead th.datepicker-switch").should(
      "have.text",
      month + " " + year
    );
  });

  // TODO --- Write test case for previous date
  // TODO --- Write test case for Off-Day

  it("To verify the selected date is displayed", () => {
    cy.get("div.datepicker-days td.active.day")
      .invoke("text")
      .then((selectedDate) => {
        cy.log("Selected Date: ", selectedDate);
        cy.get(".SelectedMeetingDate").should("contain.text", selectedDate);
      });
  });

  // TODO --- Write test case of booked and break hours slot

  it.only("To verify select available slot", () => {
    let path;
    cy.get("[data-title='Available Slot']")
      .eq(0)
      .then(($ele) => {
        path = $ele.attr("href");
        cy.log("Captured path:", path);
      });
    cy.get("[data-title='Available Slot']").eq(0).click();

    cy.url().should("contain", path);
  });
});

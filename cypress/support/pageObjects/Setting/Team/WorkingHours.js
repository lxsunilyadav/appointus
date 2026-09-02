class WorkingHours {
  getCell(day, rowIndex, cellIndex) {
    return this.getDaySection(day)
      .find("tr")
      .eq(rowIndex)
      .find("td")
      .eq(cellIndex);
  }

  getText(element) {
    return element.invoke("text").then((text) => text.trim());
  }

  getDaySection(day) {
    return cy.get("form div").eq(day).find("table tbody");
  }

  getDayStatus(day) {
    return this.getCell(day, 0, 0).find("div button");
  }

  getDayName(day) {
    return this.getText(this.getCell(day, 0, 1).find("div label"));
  }

  getStartTime(day) {
    return this.getText(this.getCell(day, 0, 2).find("div div button span"));
  }

  setStartTime(day, value) {
    return this.getCell(day, 0, 2)
      .find("div div select")
      .select(value, { force: true });
  }

  getEndTime(day) {
    return this.getText(this.getCell(day, 0, 3).find("div div button span"));
  }

  setEndTime(day, value) {
    return this.getCell(day, 0, 3)
      .find("div div select")
      .select(value, { force: true });
  }

  getAddBreakButton(day) {
    return this.getCell(day, 0, 4).find("div button");
  }

  isBreakTime(day) {
    return this.getDaySection(day)
      .find("tr")
      .its("length")
      .then((length) => length > 1);
  }

  getBreakStartTime(day, breakIndex) {
    return this.getText(
      this.getCell(day, breakIndex + 1, 2).find("div div button span")
    );
  }

  setBreakStartTime(day, breakIndex, value) {
    return this.getCell(day, breakIndex + 1, 2)
      .find("div div select")
      .select(value, { force: true });
  }

  getBreakEndTime(day, breakIndex) {
    return this.getText(
      this.getCell(day, breakIndex + 1, 3).find("div div button span")
    );
  }

  setBreakEndTime(day, breakIndex, value) {
    return this.getCell(day, breakIndex + 1, 3)
      .find("div div select")
      .select(value, { force: true });
  }

  clickAddMoreBreakButton(day) {
    return this.getDaySection(day)
      .find("tr")
      .last()
      .find("td div button")
      .eq(0);
  }

  getBreakDeleteButton(day, breakIndex) {
    return this.getCell(day, breakIndex + 1, 4)
      .find("button")
      .last();
  }

  getApplyAllButton() {
    return cy.get("form div").last().find("button");
  }

  getBackButton() {
    return cy.contains("button", "Back");
  }

  getSaveButton() {
    return cy.contains("button", "Save");
  }
}

export default WorkingHours;

// class WorkingHours {
//   getDaySection(day) {
//     return cy.get("form div").eq(day).find("table tbody");
//   }
//   getDayStatus(day) {
//     return this.getDaySection(day)
//       .find("tr")
//       .eq(0)
//       .find("td")
//       .eq(0)
//       .find("div button");
//   }
//   getDayName(day) {
//     return this.getDaySection(day)
//       .find("tr")
//       .eq(0)
//       .find("td")
//       .eq(1)
//       .find("div label")
//       .invoke("text")
//       .then((text) => text.trim());
//   }
//   getStartTime(day) {
//     return this.getDaySection(day)
//       .find("tr")
//       .eq(0)
//       .find("td")
//       .eq(2)
//       .find("div div button span")
//       .invoke("text")
//       .then((text) => text.trim());
//   }
//   setStartTime(day, value) {
//     return this.getDaySection(day)
//       .find("tr")
//       .eq(0)
//       .find("td")
//       .eq(2)
//       .find("div div select")
//       .select(value, { force: true });
//   }
//   getEndTime(day) {
//     return this.getDaySection(day)
//       .find("tr")
//       .eq(0)
//       .find("td")
//       .eq(3)
//       .find("div div button span")
//       .invoke("text")
//       .then((text) => text.trim());
//   }
//   setEndTime(day, value) {
//     return this.getDaySection(day)
//       .find("tr")
//       .eq(0)
//       .find("td")
//       .eq(3)
//       .find("div div select")
//       .select(value, { force: true });
//   }
//   getAddBreak(day) {
//     return this.getDaySection(day)
//       .find("tr")
//       .eq(0)
//       .find("td")
//       .eq(4)
//       .find("div button");
//   }
//   isBreakTime(day) {
//     return this.getDaySection(day)
//       .find("tr")
//       .its("length")
//       .then((length) => length > 1);
//   }
//   getBreakStartTime(day, breakIndex) {
//     return this.getDaySection(day)
//       .find("tr")
//       .eq(breakIndex + 1)
//       .find("td")
//       .eq(2)
//       .find("div div button span")
//       .invoke("text")
//       .then((text) => text.trim());
//   }
//   setBreakStartTime(day, breakIndex, value) {
//     return this.getDaySection(day)
//       .find("tr")
//       .eq(breakIndex + 1)
//       .find("td")
//       .eq(2)
//       .find("div div select")
//       .select(value, { force: true });
//   }
//   getBreakEndTime(day, breakIndex) {
//     return this.getDaySection(day)
//       .find("tr")
//       .eq(breakIndex + 1)
//       .find("td")
//       .eq(3)
//       .find("div div button span")
//       .invoke("text")
//       .then((text) => text.trim());
//   }
//   setBreakEndTime(day, breakIndex, value) {
//     return this.getDaySection(day)
//       .find("tr")
//       .eq(breakIndex + 1)
//       .find("td")
//       .eq(3)
//       .find("div div select")
//       .select(value, { force: true });
//   }
//   addMoreBreak(day) {
//     return this.getDaySection(day)
//       .find("tr")
//       .last()
//       .find("td div button")
//       .eq(0);
//   }
//   getBreakDelete(day, breakIndex) {
//     return this.getDaySection(day)
//       .find("tr")
//       .eq(breakIndex + 1)
//       .find("td")
//       .eq(4)
//       .find("button")
//       .last();
//   }
//   getApplyAll() {
//     return cy.get("form div").last().find("button");
//   }
//   getBackButton() {
//     return cy.contains("button", "Back");
//   }
//   getSaveButton() {
//     return cy.contains("button", "Save");
//   }
// }

// export default WorkingHours;

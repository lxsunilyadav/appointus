class Items {
  getHeader() {
    return cy.get("h2.__className_4fd903").find("div");
  }
  getBody(itemType) {
    return itemType === "Services"
      ? cy
          .get("h2.__className_4fd903")
          .parent()
          .siblings("div")
          .eq(0)
          .find("div")
      : cy
          .get("h2.__className_4fd903")
          .parent()
          .parent()
          .siblings("div")
          .eq(0)
          .find("div");
  }
  getText(element) {
    return element.text().trim();
  }
  getTitle() {
    return this.getHeader().eq(0).find("label");
  }
  getAddItemButton() {
    return cy.contains("button", "Create");
  }
  getOtherActivities() {
    return this.getBody().eq(0).find("button");
  }
  getTotalItems() {
    return this.getBody().eq(1).find("div").children();
  }
  getItemDetails(index) {
    const itemImage = this.getTotalItems().eq(index).find("div div").eq(0);
    const itemDetails = this.getTotalItems().eq(index).find("div div").eq(1);
    return {
      itemImage: itemImage,
      itemName: itemDetails.find("h3"),
      itemPrice: itemDetails.find("div label span"),
      itemDuration: itemDetails.find("p"),
      itemLocation: itemDetails.find("div").eq(0).find("label span"),
      itemCost: itemDetails.find("div").eq(1).find("label span"),
      itemTotalSeats: itemDetails
        .find("div")
        .eq(2)
        .find("label")
        .eq(0)
        .find("span"),
      itemTotalSeats: itemDetails
        .find("div")
        .eq(2)
        .find("label")
        .eq(1)
        .find("span"),
      itemTiming: {
        startTime: itemDetails.eq(1).find("div").eq(3).find("div p").eq(0),
        endTime: itemDetails.eq(1).find("div").eq(3).find("div p").eq(1),
      },
    };
  }
  openPopup() {
    return itemDetails.eq(2).find("button").click();
  }
  getUpdateButton(action) {
    this.openPopup();
    return cy.get("span.__className_746de4").contains(action);
  }
}

export default Items;

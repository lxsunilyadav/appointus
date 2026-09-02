import BusinessCategories from "../../../support/pageObjects/Onboarding/BusinessCategories";
import BusinessType from "../../../support/pageObjects/Onboarding/BusinessType";
import Services from "../../../support/pageObjects/Onboarding/Services";
import AddStaff from "../../../support/pageObjects/Setting/Team/AddStaff";
import LocationDetails from "../../../support/pageObjects/Onboarding/LocationDetails";

let businessType = new BusinessType();
let businessCategories = new BusinessCategories();
let service = new Services();
let staff = new AddStaff();
let locationDetails = new LocationDetails();

describe.skip("Onboarding Step 1", () => {
  context("Positive cases", () => {
    beforeEach(() => {
      cy.login("f1@yopmail.com", "Techie@1234");
    });
    it("To verify Individual option is selected", () => {
      businessType
        .getIndividualButton()
        .should("have.attr", "aria-checked", "true");
    });

    it("To verify Multi staff option", () => {
      businessType.getMultiBusinessButton().should("have.attr", "disabled");
    });
  });

  //   context("Negative cases", () => {
  //     it();
  //   });
});

describe.skip("Onboarding Step 2", () => {
  context("Positive cases", () => {
    beforeEach(() => {
      cy.login("f1@yopmail.com", "Techie@1234");
      businessType.getSaveButton().click();
    });
    it.skip("To verify default selected service", () => {
      let selectedText;
      businessCategories
        .getServicesList()
        .eq(0)
        .then(($el) => {
          selectedText = $el.text();
        });
      businessCategories.getSelectedService().then(($el) => {
        let text = $el.text();
        expect(text).to.eq(selectedText);
      });
    });

    it("To verify selected value", () => {
      businessCategories.selectService("Health & Fitness");
      businessCategories
        .getSelectedService()
        .should("have.text", "Health & Fitness");
      businessCategories
        .getSubCategoryLabel()
        .should("have.text", "Health & Fitness");
    });

    it("To verify select subcategory", () => {
      businessCategories.getSelectedSubcategory().click();
      businessCategories.selectSubCategory();
      businessCategories.getSaveButton();

      /* ***TODO- Need to add intercept & asseration to check subcategory value*** */
    });
  });

  //   context("Negative cases", () => {
  //     it();
  //   });
});

describe.skip("Onboarding Step 3", () => {
  context("Positive cases", () => {
    let rows;
    beforeEach(() => {
      cy.login("f1@yopmail.com", "Techie@1234");
      businessType.getSaveButton().click();
      businessCategories.selectService("Health & Fitness");
      businessCategories.getSelectedSubcategory().click();
      cy.wait(3000);
      businessCategories.selectSubCategory();
      businessCategories.getSaveButton().click();
      service.getRow(0).then(($rows) => {
        rows = $rows.length;
      });
    });
    it("To verify title", () => {
      service.getTitle();
    });

    it("To verify default duration", () => {
      service.getDefaultDuration(0).should("have.contains", "15 mins.");
    });

    it("To verify default color", () => {
      service
        .getDefaultColor(0)
        .should("have.attr", "style", "background: rgb(192, 192, 192);");
    });

    it("To verify default row", () => {
      service.getRow(0).should("have.length", 1);
    });

    it("To verify add button", () => {
      function addservice() {
        service.getAddMore().click();
        rows++;
      }
      addservice();
      service.getRowLenght().then((length) => {
        let rowLenght = length;
        expect(rowLenght).to.eq(rows);
      });
      cy.log(rows);
    });

    it("To delete button", () => {
      service.getRow(0).each(($row, index) => {
        if (index === 0) {
          service.getDeleteIcon(index).find("svg").should("not.exist");
        } else {
          service.getDeleteIcon(index).find("svg").should("exist");
        }
      });
    });

    it("To verify validation Message", () => {
      service.getSaveButton().click();
      service.getValidationMessge(0).then(({ serviceName, servicePrice }) => {
        serviceName.should("exist");
        servicePrice.should("exist");
      });
    });

    it("To verify delete button", () => {
      service.getAddMore().click();
      function deleteService() {
        service.getRowLenght().then((length) => {
          let lastIndex = length - 1;
          service.getDeleteIcon(lastIndex).click();
          rows--;
        });
      }
      deleteService();
      service.getRowLenght().then((length) => {
        let rowLenght = length;
        expect(rowLenght).to.eq(rows);
      });
    });

    it("To verify save service", () => {
      service.getServiceName(0).type("Service 1");
      service.selectDuration(0, "1 hrs");
      service.getServicePrice(0).type("50");
      service.getSaveButton().click();
    });
  });
});

describe.skip("Onboarding Step 4", () => {
  context("Positive Cases", () => {
    beforeEach(() => {
      cy.login("f1@yopmail.com", "Techie@1234");
      businessType.getSaveButton().click();
      businessCategories.selectService("Health & Fitness");
      businessCategories.getSelectedSubcategory().click();
      cy.wait(3000);
      businessCategories.selectSubCategory();
      businessCategories.getSaveButton().click();
      service.getServiceName(0).type("Service 1");
      service.selectDuration(0, "1 hrs");
      service.getServicePrice(0).type("50");
      service.getSaveButton().click();
    });

    it("To verify owner mail", () => {
      staff
        .getEmailInput(0)
        .should("have.attr", "value", "f1@yopmail.com")
        .and("have.attr", "disabled");
    });

    it("To verify Owner role", () => {
      staff.getDefaultRole(0).should("have.text", "Owner");
    });

    it("To verify Add button", () => {
      staff.getAddMore().should("have.attr", "disabled");
    });

    it("To verify validation message", () => {
      staff.getSaveButton().click();
      staff.getValidationMessge(0).then(({ name, email, phone }) => {
        name.should("exist");
        phone.should("exist");
      });
    });

    it("To verify Save staff", () => {
      staff.getNameInput(0).type("New Owner");
      staff.getMobileInput(0).type("9090908765");
      staff.getSaveButton().click();
    });
  });
});

describe.skip("Onboarding step 5", () => {
  context("Positive Cases", () => {
    beforeEach(() => {
      cy.login("f1@yopmail.com", "Techie@1234");
      businessType.getSaveButton().click();
      businessCategories.selectService("Health & Fitness");
      businessCategories.getSelectedSubcategory().click();
      cy.wait(3000);
      businessCategories.selectSubCategory();
      businessCategories.getSaveButton().click();
      service.getServiceName(0).type("Service 1");
      service.selectDuration(0, "1 hrs");
      service.getServicePrice(0).type("50");
      service.getSaveButton().click();
      cy.wait(2000);
      staff.getNameInput(0).type("New Owner");
      staff.getMobileInput(0).type("9090908765");
      staff.getSaveButton().click();
    });

    it("To verify validation message", () => {
      locationDetails.getSaveButton().click();
      locationDetails.getCreateButton().click();
      locationDetails
        .getValidationMessge()
        .then(({ businessName, businessURL, locationName, zipcode }) => {
          businessName.should("exist");
          businessURL.should("exist");
          locationName.should("exist");
          zipcode.should("exist");
        });
    });

    // it("To verify same domain validation", () => {
    //   locationDetails
    //     .getValidationMessge()
    //     .then(({ businessName, businessURL, locationName, zipcode }) => {
    //       businessURL.should("exist");
    //     });
    // });

    it("To verify save details", () => {
      locationDetails.getBusinessName().type("f1@yopmail.com");
      locationDetails.getURL().type("plp12");
      cy.wait(3000);
      locationDetails.getLocationName().type("Location 1");
      locationDetails.getAddress().type("#550, saini vihar phase 1, baltana");
      locationDetails.selectCountry("India");
      locationDetails.selectState("Chandigarh");
      locationDetails.selectCity("Chandigarh");
      locationDetails.getZipCode().type("140604");
      locationDetails.selectTimezone(0);
      locationDetails.getSaveButton().click();
    });
  });
});

describe("Onboarding Step 6", () => {
  context("Positive Cases", () => {
    beforeEach(() => {
      cy.login("f1@yopmail.com", "Techie@1234");
      businessType.getSaveButton().click();
      businessCategories.selectService("Health & Fitness");
      businessCategories.getSelectedSubcategory().click();
      cy.wait(3000);
      businessCategories.selectSubCategory();
      businessCategories.getSaveButton().click();
      service.getServiceName(0).type("Service 1");
      service.selectDuration(0, "1 hrs");
      service.getServicePrice(0).type("50");
      service.getSaveButton().click();
      cy.wait(2000);
      staff.getNameInput(0).type("New Owner");
      staff.getMobileInput(0).type("9090908765");
      staff.getSaveButton().click();
      cy.wait(3000);
      locationDetails.getBusinessName().type("f1@yopmail.com");
      locationDetails.getURL().type("plp12", { force: true });
      cy.wait(3000);
      locationDetails.getLocationName().type("Location 1");
      locationDetails.getAddress().type("#550, saini vihar phase 1, baltana");
      locationDetails.selectCountry("India");
      locationDetails.selectState("Chandigarh");
      locationDetails.selectCity("Chandigarh");
      locationDetails.getZipCode().type("140604");
      locationDetails.selectTimezone(0);
      locationDetails.getSaveButton().click();
    });

    it("To verify save business hours", () => {
      cy.contains("button", "Save").click();
    });
  });
});

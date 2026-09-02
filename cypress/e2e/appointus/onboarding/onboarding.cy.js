describe("Onboarding", () => {
  it("Onboarding Process", () => {
    let mail = "nw2@yopmail.com";
    let domain = Date.now();
    let country = "Norway";
    let city = "Oslo";
    let state = "Oslo";
    cy.visit("https://appuidev.appointusonline.com/login");
    cy.wait(2000);

    cy.get("[name ='email']").type(mail);
    cy.get("[name ='password']").type("Techie@1234");
    cy.get("[type='submit']").click();
    cy.wait(3000);

    cy.get("[id='r0']").should("have.attr", "aria-checked", "true");
    cy.get("[id='r1']").should("have.attr", "aria-checked", "false");
    // .and("have.attr", "disabled");
    cy.get("[type='submit']").click();
    cy.get("[data-value='health & fitness']").click();

    cy.wait(5000);
    cy.get("[id=':rb:-form-item']").click();

    // cy.get("select")
    //   .find("option")
    //   .each(($el) => {
    //     cy.log($el.text());
    //   });

    cy.get("select").select(1, { force: true });
    cy.get("[type='submit']").click();
    cy.wait(3000);

    cy.get("[name='service.0.title']").type("Service");
    cy.get("[name='service.0.price']").type("30");
    cy.get("[type='submit']").click();

    cy.get("[name='worker.0.name']").type("Owner");
    cy.get("[name='worker.0.mobile']").type("7687654567");
    cy.get("[type='submit']").click();
    cy.wait(3000);

    cy.get("[name='name']").type(mail);
    cy.get("[placeholder='URL']").type(domain, { force: true });
    cy.wait(2000);

    cy.get("button").contains("Create").click();
    cy.wait(2000);

    cy.get("[name='address']").type("12 east coat");
    cy.get("select").eq(0).select(country, { force: true });
    cy.get("[name='city']").type(city);
    cy.get("select").eq(1).select(2, { force: true });
    cy.get("[name='zip']").type("12345");
    cy.get("select")
      .eq(2)
      .select(0, { force: true })
      .trigger("change", { force: true });
    // cy.get("select").eq(2).select(0, { force: true }).then(($select) => {
    //     // Get the selected option text or value
    //     const selectedOption = $select.find("option:selected").text(); // Or use .val() for the value
    //     cy.log(selectedOption); // Log it in Cypress' Test Runner
    //     console.log(selectedOption); // Log it to the browser's console
    // });
    cy.get("[type='submit']").click();

    cy.wait(2000);
    cy.get("[type='submit']").click();

    cy.wait(3000);
    cy.get(".bg-white > .text-center").click("topRight");
  });
});

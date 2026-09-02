describe("Signup Flow with Stripe Checkout", () => {
  it("Intercepts Stripe Checkout URL and redirects directly", () => {
    const num = Date.now();
    const mailId = `mj${num}@yopmail.com`;

    cy.visit("https://appuidev.appointusonline.com/");
    cy.get(".text-primary").click();
    cy.wait(2000);
    cy.get("[type='email']").type(mailId);
    cy.get("[type='password']").type("Techie@1234");
    cy.get("select").select("India", { force: true });
    cy.get("[type='submit']").click();
  });
});

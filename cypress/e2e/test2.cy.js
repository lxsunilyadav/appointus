
describe("login functionality", ()=> {
    it("login with valid mail and password", ()=> {
        cy.visit("http://92.204.135.120:8098/");
        cy.get("#LoginCredentialsControl1_UserName").type("tom");
        cy.get("#LoginCredentialsControl1_Password").type("tom");
        cy.get("#LoginCredentialsControl1_LoginButton").click();
        cy.wait(3000);
        cy.get("#firstnametb").type("mike");
        cy.xpath("//button[@type='submit']").click();
    })
})
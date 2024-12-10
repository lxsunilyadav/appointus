describe("Verify my profile", ()=> {

    const mailId = "snehasharma@yopmail.com"
    const password = "Techie@1234"

    before(()=> {
        cy.visit("https://appuidev.appointusonline.com/");
        cy.get("[name ='email']").type(mailId);
        cy.get("[name ='password']").type(password);
        cy.get("[type='submit']").click();
        cy.url().should('include', '/calender');
        cy.wait(5000)
        cy.get("[id='radix-:R1lbpla:']").find("div>strong").should("contain", "Sneha");
        cy.get("[id='radix-:R1lbpla:']>div>p").should("contain", "snehasharma@yopmail.com");
        cy.get("[href='/settings/profile']").click();
        
    })
    
    it("Verify data in profile", ()=> {
        cy.url().should("include", "settings/profile");
        cy.get("[name='firstname']").should("have.value", "Sneha");
        cy.get("[name='lastname']").should("have.value", "Sharma");
        cy.get("[name='email']")
        .should("have.value", "snehasharma@yopmail.com")
        .and("be.disabled");
        cy.get("[name='phone']").should("contain.value", "8778787887")
        // .and("contain.value", "+91");
        cy.get("select").eq(0).should("have.value", "India");
        cy.get("select").eq(1).should("have.value", "Asia/Kolkata");
    })
})
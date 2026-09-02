

// describe("login page", function() {
//     it("abc", function() {
//         cy.visit('https://rehntitposappstaging.azurewebsites.net/');
//         cy.get('[name="txtEmail"]').type("support@alwaysanotherwave.com");
//         cy.get('[name="txtPassword"]').type("ZaZ#GYgtAaAd12");
//         cy.get(".ui button").click();
//         cy.wait(5000)
//         cy.get('[value="1"]').click();
//         cy.get('[value="5"]').click();
//         cy.get('[value="9"]').click();
//         cy.get('[value="8"]').click();
//         cy.get('[value="0"]').click();
//         cy.get('[value="8"]').click();
//         cy.wait(4000);
//         // cy.xpath('//a[contains(text(),"Confirm")]').click();
//         cy.wait(2000);
//         cy.xpath("//a[normalize-space()='Test Location']").click();
//         cy.wait(3000)
//         cy.xpath("//div[contains(@class,'main-menu scrolling')]//a[1]").click();
//         cy.wait(7000);
//         cy.xpath("//body/div[@id='root']/div[contains(@class,'app')]/div[contains(@class,'')]/div[contains(@class,'main-container')]/div[contains(@class,'dashboard-page')]/div[contains(@class,'cmn-shad slider-box')]/div[contains(@class,'ui grid')]/div[contains(@class,'right floated ten wide tablet eleven wide column')]/form[contains(@class,'ui form radio-button')]/div[contains(@class,'inline fields')]/div[1]").click();
//         cy.get("input[value='28']").should("be.checked");
//         cy.get("input[value='24']").should("be.not.checked")
//         // cy.xpath("//div[@class='ui item simple dropdown main-icon']").click();
//         // cy.xpath("//div[@class='menu transition visible left setting-dropdown']/div[2]").click();
//         // cy.wait(3000);
//         // cy.xpath("//h4[@class='ui header' and contains(text(), 'Pricing & Taxes')]")
//         // .should('be.visible')
//         // .click();
//         })
// }); 



// describe("Go to website", () => {
//     it("Select item", () => {
//         cy.visit('https://rehntitwidgetappstaging.azurewebsites.net/');
//         cy.wait(5000);
//         // cy.xpath('//h3[contains(text(),"Park")]').should('be.visible')
//         // .and('contain', 'Park').click();
//         // cy.wait(5000);
//         // cy.xpath('//div[@class="four wide column"]').should('have.length', 3);
//         // cy.xpath('//div[@id="swiper-wrapper-56f19580ef67b3fb"]/div[4]/div[1]/div[1]/div[1]/button').click();

//         // cy.xpath('//div[@class="ui horizontal list navbar"]/div[last()]').then((x)=> {
//         //     let tittle = x.text();
//         //     expect(tittle).to.not.equal('Locations');
//         // })
 
//         // cy.xpath('//div[@class="ui horizontal list navbar"]/div[last()]').should('not.have.text','Locations')
//     })
// })



describe("login page", function() {
    it("abc", function() {
        cy.visit('https://rehntitposappstaging.azurewebsites.net/');
        cy.get('[name="txtEmail"]').type("support@alwaysanotherwave.com");
        cy.get('[name="txtPassword"]').type("ZaZ#GYgtAaAd12");
        cy.get(".ui button").click();
        cy.wait(5000)
        cy.get('[value="1"]').click();
        cy.get('[value="5"]').click();
        cy.get('[value="9"]').click();
        cy.get('[value="8"]').click();
        cy.get('[value="0"]').click();
        cy.get('[value="8"]').click();
        cy.wait(4000);
        cy.wait(2000);
        cy.xpath("//a[normalize-space()='Test Location']").click();
        cy.wait(3000)
        cy.xpath("//div[contains(@class,'main-menu scrolling')]//a[2]").click();
        cy.wait(2000);
        cy.xpath("//div[contains(@class,'main-container')]//div[3]").click();
        cy.xpath("//i[@class='plus circle big icon orange-color add-icon']").click();
        cy.xpath("//button[normalize-space()='Activity']").click();
        cy.get("input.hidden[@type='checkbox']").uncheck();
        // cy.xpath("//div[contains(@data,'requirementInStore')]//input[contains(@type,'checkbox')]")
        // .uncheck({force: true})
        // .should("be.not.checked");
        })
}); 






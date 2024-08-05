describe("", () => {
  it("DropDown Concept", () => {
    cy.visit("https://www.ebay.com/");
    cy.get("#gh-shop-a")
      .should("be.visible")
      .and("have.attr", "aria-controls", "gh-sbc-o")
      .click()
      .get(".scnd")
      .should("be.visible")
      .contains("Collectibles")
      .click();
  });
  it.only("Photo Upload", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").selectFile("cypress/fixtures/image.png");
    cy.wait(2000)
    cy.get(".button").click();
  });
});

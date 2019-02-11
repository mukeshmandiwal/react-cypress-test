/* globals cy */
describe("Add", () => {
  it("for check sum", () => {
    cy.visit("/")
      .getByText(/^9$/)
      .click()
      .getByText(/^\+$/)
      .click()
      .getByText(/^8$/)
      .click()
      .getByText(/^=$/)
      .click();
  });
});

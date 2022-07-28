class LoginPage {
    getQuering(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.xpath("//li[normalize-space(.)='Querying']/a")
    }
}
export const loginPage = new LoginPage()
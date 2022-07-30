export class BasePage {
    getInputByPlaceHolder(text: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.xpath(`//input[@placeholder='${text}']`)
    }

    getBtnByText(btnName: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.xpath(`//button[normalize-space(.)='${btnName}']`)
    }

    get langSwitcher(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.xpath("//div[contains(@class,'nav-lang')][span]")
    }

    getAnyText(text: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.xpath(`//*[normalize-space(.)='${text}']`)
    }

}
export class BasePage {
    getInputByPlaceHolder(text: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.xpath(`//input[@placeholder='${text}']`)
    }

    getBtnByText(btnName: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.xpath(`//button[normalize-space(.)='${btnName}']`)
    }
}
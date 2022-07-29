import {BasePage} from './basePage'

class HomePage extends BasePage {
    get logo(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.xpath("(//header//a[.//*[contains(@clip-path, '#logo-colored')]])[1]")
    }

    get hintImage(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.xpath("//picture//img")
    }

    get burgerBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.xpath("//button[@class='burger-cross']")
    }
}

export const homePage = new HomePage()
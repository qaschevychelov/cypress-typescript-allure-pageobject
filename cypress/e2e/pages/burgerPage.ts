import { BasePage } from "./basePage";

class BurgerPage extends BasePage<BurgerPage> {
    getLink(linkName: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(".links").contains(linkName)
    }
}
export const burgerPage = new BurgerPage()
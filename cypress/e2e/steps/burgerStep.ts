import { homePage } from "../pages/homePage";
import { BaseStep } from "./BaseStep";

class BurgerStep extends BaseStep {
    checkPageBodyTextIsVisible(body: string): BurgerStep {
        cy.allure().step(`страница содержит текст`, true)
        cy.contains(body).should("be.visible")
        return this
    }
    clickLink(linkName: string): BurgerStep {
        cy.allure().step(`перейти по ссылке ${linkName}`, true)
        cy.get(".links").contains(linkName).invoke('removeAttr', 'target').click()
        return this
    }
    checkLinkIsVisible(linkName: string): BurgerStep {
      cy.allure().step(`ссылка ${linkName} отображается`, true)
      cy.get(".links").contains(linkName).should("be.visible")
      return this
    }
    openBurger(): BurgerStep {
        cy.allure().step("кликнуть на бургер меню", true)
        homePage.burgerBtn.click()
        return this
    }
}
export const burgerStep = new BurgerStep()
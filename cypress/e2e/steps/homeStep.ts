import { BaseStep } from "./BaseStep";
import { homePage } from "../pages/homePage";

class HomeStep extends BaseStep<HomeStep> {
    checkBurgerBtnIsVisible(): HomeStep {
        cy.allure().step("Кнопка бургер отображается", true)
        homePage.burgerBtn.should("be.visible")
        return this
    }
    checkMainHintImageIsVisible(): HomeStep {
        cy.allure().step("Изображение с подсказкой для Инсты отображается", true)
        homePage.hintImage.should("be.visible")
        return this
    }
}
export const homeStep = new HomeStep()
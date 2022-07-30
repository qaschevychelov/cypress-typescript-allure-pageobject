import { homePage } from "../pages/homePage";

export class BaseStep {
    changeLang(lang: string): BaseStep {
        cy.allure().step(`Сменить язык на ${lang}`, true)
        homePage.langSwitcher.realHover()
        cy.contains(lang).click()
        return this
    }
    clickBtn(btnName: string): BaseStep {
        cy.allure().step(`нажать кнопку ${btnName}`, true)
        homePage.getBtnByText(btnName).realClick()
        return this
    }
    checkBtnIsVisible(btnName: string): BaseStep {
        cy.allure().step(`Кнопка '${btnName}' отображается`, true)
        homePage.getBtnByText(btnName).should("be.visible")
        return this
    }
    checkInputIsVisibleByPlaceHolder(placeHolder: string): BaseStep {
        cy.allure().step(`Поле ввода '${placeHolder}' отображается`, true)
        homePage.getInputByPlaceHolder(placeHolder).should("be.visible")
        return this
    }

    checkLangSwitcherIsVisible(): BaseStep {
        cy.allure().step("Переключатель языка отображается", true)
        homePage.langSwitcher.should("be.visible")
        return this
    }

    checLogoVisible(): BaseStep {
        cy.allure().step("Лого в шапке отображается", true)
        homePage.logo.should("be.visible")
        return this
    }

    checkAnyTextIsVisible(text: string): BaseStep {
        cy.allure().step("текст отображается " + text, true)
        homePage.getAnyText(text).should("be.visible")
        return this
    }
}

export const baseStep = new BaseStep()
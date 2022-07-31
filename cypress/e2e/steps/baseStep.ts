import { homePage } from "../pages/homePage";

export class BaseStep<T> {
    parent: T

    constructor() {
        this.parent = this as unknown as T
    }
    
    submit(btnName: string): T {
        cy.allure().step(`Нажать кнопку ${btnName}`, true)
        homePage.getBtnByText(btnName).realClick()
        return this.parent
    }
    setField(field: string, value: string): T {
        cy.allure().step(`Ввести в поле ${field} значение ${value}`, true)
        homePage.getInputByPlaceHolder(field).realType(value)
        return this.parent
    }

    changeLang(lang: string): T {
        cy.allure().step(`Сменить язык на ${lang}`, true)
        homePage.langSwitcher.realHover()
        cy.contains(lang).click()
        return this.parent
    }
    clickBtn(btnName: string): T {
        cy.allure().step(`нажать кнопку ${btnName}`, true)
        homePage.getBtnByText(btnName).realClick()
        return this.parent
    }
    checkBtnIsVisible(btnName: string): T {
        cy.allure().step(`Кнопка '${btnName}' отображается`, true)
        homePage.getBtnByText(btnName).should("be.visible")
        return this.parent
    }
    checkInputIsVisibleByPlaceHolder(placeHolder: string): T {
        cy.allure().step(`Поле ввода '${placeHolder}' отображается`, true)
        homePage.getInputByPlaceHolder(placeHolder).should("be.visible")
        return this.parent
    }

    checkLangSwitcherIsVisible(): T {
        cy.allure().step("Переключатель языка отображается", true)
        homePage.langSwitcher.should("be.visible")
        return this.parent
    }

    checLogoVisible(): T {
        cy.allure().step("Лого в шапке отображается", true)
        homePage.logo.should("be.visible")
        return this.parent
    }

    checkAnyTextIsVisible(text: string): T {
        cy.allure().step("текст отображается " + text, true)
        homePage.getAnyText(text).should("be.visible")
        return this.parent
    }
}

export const baseStep = new BaseStep()
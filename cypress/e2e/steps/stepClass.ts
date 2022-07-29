import { loginPage } from "../pages/loginPage";
import { homePage } from "../pages/homePage";

class StepClass {
    checkBtnIsVisible(btnName: string) {
      cy.allure().step(`Кнопка '${btnName}' отображается`, true)
      homePage.getBtnByText(btnName).should("be.visible")
      return this
    }
    checkInputIsVisibleByPlaceHolder(placeHolder: string): StepClass {
        cy.allure().step(`Поле ввода '${placeHolder}' отображается`, true)
        homePage.getInputByPlaceHolder(placeHolder).should("be.visible")
        return this
    }
    checkBurgerBtnIsVisible(): StepClass {
        cy.allure().step("Кнопка бургер отображается", true)
        homePage.burgerBtn.should("be.visible")
        return this
    }
    checkLangSwitcherIsVisible(): StepClass {
        cy.allure().step("Переключатель языка отображается", true)
        homePage.langSwitcher.should("be.visible")
        return this
    }

    goToQuering(): StepClass {
        cy.allure().step("выполнили степ", true)
        
        loginPage.quering.realClick()
        return this
    }

    checLogoVisible(): StepClass {
        cy.allure().step("Лого в шапке отображается", true)
        homePage.logo.should("be.visible")
        return this
    }

    checkMainHintImageIsVisible(): StepClass {
        cy.allure().step("Изображение с подсказкой для Инсты отображается", true)
        homePage.hintImage.should("be.visible")
        return this
    }
}

export const stepClass = new StepClass()
import { loginPage } from "../pages/loginPage";

class StepClass {

    goToQuering(): StepClass {
        cy.allure().step("выполнили степ", true)
        
        loginPage.getQuering().click({force: true})
        return this
    }
}

export const stepClass = new StepClass()
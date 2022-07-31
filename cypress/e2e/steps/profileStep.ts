import { BaseStep } from "./baseStep";
import { profilePage } from "../pages/profilePage";

class ProfileStep extends BaseStep<ProfileStep> {
  checkLoginIsVisible(login: string): ProfileStep {
    cy.allure().step("отображается логин " + login, true)
    profilePage.getLogin(login).should("be.visible")
    return this
  }
  checkAvatarIsVisible(): ProfileStep {
    cy.allure().step("отображается аватар", true)
    profilePage.avatar.should("be.visible")
    return this
  }

}
export const profileStep = new ProfileStep()
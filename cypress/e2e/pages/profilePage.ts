import { BasePage } from "./basePage";

class ProfilePage extends BasePage<ProfilePage> {
    get avatar() { return cy.xpath("//div[@class='avatar']/img", { timeout: 10000 }) }
    getLogin(login: string) { return cy.xpath(`//div[@class='account'][starts-with(normalize-space(.),'${login} ')]`) }
}
export const profilePage = new ProfilePage()
import { homeStep } from '../steps/HomeStep'
import { burgerStep } from '../steps/burgerStep'
import { profileStep } from '../steps/profileStep'
import * as errors from './../../fixtures/errors.json'
import * as langs from './../../fixtures/langs.json'
import * as logins from './../../fixtures/logins.json'

describe('SMMTOUCH.TECH - домашняя', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  it('отображаются основные элементы', () => {
    homeStep
      .checkMainHintImageIsVisible()
      .checkBurgerBtnIsVisible()
      .checLogoVisible()
      .checkLangSwitcherIsVisible()
      .checkInputIsVisibleByPlaceHolder("Имя профиля Инстаграм")
      .checkBtnIsVisible("Раскрутить Инстаграм")
    cy.contains("В одном шаге от популярности").should("be.visible")
  })

  it('отображается ошибка, если не ввести логин', () => {
    homeStep.clickBtn("Раскрутить Инстаграм")
    cy.contains(errors.emptyLogin).should("be.visible")
  })

  for (const lang in langs) {
    it(`можно переключить язык на ${lang}`, () => {
      homeStep.changeLang(lang)
      cy.contains(langs[lang]).should("be.visible")
    })
  }

  it("бургер меню открывается", () => {
    burgerStep
      .openBurger()
      .checkLinkIsVisible("Политика конфиденциальности")
      .checkLinkIsVisible("Публичная оферта")
      .checkLinkIsVisible("Политика возврата")
  })

  for (const login of logins.invalid) {
    it(`отображается ошибка, если логин невалидный ${login}`, () => {
      homeStep
        .setField("Имя профиля Инстаграм", login)
        .submit("Раскрутить Инстаграм")
      cy.contains(errors.emptyLogin).should("be.visible")
    });
  }

  it.only('происходит переход на страницу профиля', () => {
    // подписываемся на запрос
    cy.intercept(
      "api/scrape/instagram/feed/rapid28*"
    ).as("profileRequest")

    homeStep
      .setField("Имя профиля Инстаграм", logins.valid[0])
      .submit("Раскрутить Инстаграм")
    profileStep
      .checkAvatarIsVisible()
      .checkLoginIsVisible(logins.valid[0])

    // пример ожидания отправки с фронта запроса
    cy.wait("@profileRequest")
      .then(interCeption => {
        expect(
          interCeption.response.statusCode,
          "статус код не равен ожидаемому"
        ).eq(200)
        expect(interCeption.response.body.status).eq("success")
      })
  });
})
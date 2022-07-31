import { homeStep } from '../steps/HomeStep'
import { burgerStep } from '../steps/burgerStep'
import * as errors from './../../fixtures/errors.json'
import * as langs from './../../fixtures/langs.json'

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
})
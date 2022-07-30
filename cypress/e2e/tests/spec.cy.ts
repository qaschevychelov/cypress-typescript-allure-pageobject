import { homeStep } from '../steps/HomeStep'
import { burgerStep } from '../steps/burgerStep'

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
    cy.contains("Неверный логин. Посмотрите пример выше, он показывает, где находится ваше имя пользователя в инстаграм. ☝️").should("be.visible")
  })

  const langs = {
    "English": "One step away from popularity",
    "Deutsch": "Einen Schritt vom Ruhm entfernt",
    "Español": "A un paso de la popularidad",
    "Português": "A um passo da fama",
    "Italiano": "A un passo dalla fama",
    "Türkçe": "Popülerlikten bir adım uzakta",
    "Українська": "В одному кроці від популярності",
    "Русский": "В одном шаге от популярности"
  }

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
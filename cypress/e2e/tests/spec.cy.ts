import { homePage } from '../pages/homePage'
import { stepClass } from '../steps/stepClass'

describe('SMMTOUCH.TECH - домашняя', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  it('отображаются основные элементы', () => {
    stepClass
        .checLogoVisible()
        .checkMainHintImageIsVisible()
        .checkLangSwitcherIsVisible()
        .checkBurgerBtnIsVisible()
        .checkInputIsVisibleByPlaceHolder("Имя профиля Инстаграм")
        .checkBtnIsVisible("Раскрутить Инстаграм")
    cy.contains("В одном шаге от популярности").should("be.visible")
  })

  it('отображается ошибка, если не ввести логин', () => {
    stepClass.clickBtn("Раскрутить Инстаграм")
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
      stepClass.changeLang(lang)
            cy.contains(langs[lang]).should("be.visible")
    })
  }

  it("бургер меню открывается", () => {
    stepClass.openBurger()
    cy.get(".links").contains("Политика конфиденциальности").should("be.visible")
    cy.get(".links").contains("Публичная оферта").should("be.visible")
    cy.get(".links").contains("Политика возврата").should("be.visible")
  })
})
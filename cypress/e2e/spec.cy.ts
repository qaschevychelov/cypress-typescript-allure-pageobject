import { stepClass } from './steps/stepClass'

describe('SMMTOUCH.TECH - домашняя', () => {
  it('отображаются основные элементы', () => {
    // cy.visit('/')
    cy.visit('/', {
      headers: {
        'Accept-Language': 'ru',
      },
  });
    stepClass
        .checLogoVisible()
        .checkMainHintImageIsVisible()
        .checkLangSwitcherIsVisible()
        .checkBurgerBtnIsVisible()
        .checkInputIsVisibleByPlaceHolder("Имя профиля Инстаграм")
        .checkBtnIsVisible("Раскрутить Инстаграм")
    cy.contains("В одном шаге от популярности").should("be.visible")
  })
})
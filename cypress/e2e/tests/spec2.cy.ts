import { burgerStep } from '../steps/burgerStep'
import * as policy from '../../fixtures/confidentPolicy.json'
import * as oferta from '../../fixtures/oferta.json'
import * as returnPolicy from '../../fixtures/returnPolicy.json'

describe('SMMTOUCH.TECH - проверка соглашений', () => {
  beforeEach(() => {
    cy.visit('/');
    burgerStep.openBurger()
  });
  it('политика конфиденциальности', () => {
    burgerStep.clickLink("Политика конфиденциальности")
      .checkAnyTextIsVisible(policy.ttl)
      .checkAnyTextIsVisible(policy.body)
  })
  it('публичная оферта', () => {
    burgerStep.clickLink("Публичная оферта")
      .checkAnyTextIsVisible(oferta.ttl)
      .checkAnyTextIsVisible(oferta.body)
  })
  it('политика возврата', () => {
    burgerStep.clickLink("Политика возврата")
      .checkAnyTextIsVisible(returnPolicy.ttl)
      .checkAnyTextIsVisible(returnPolicy.body)

  })
})
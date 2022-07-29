import { stepClass } from './steps/stepClass'

describe('spec4', () => {
  it('passes4', () => {
    cy.visit('https://example.cypress.io', { failOnStatusCode: false })
    stepClass.goToQuering()
    cy.url().then((data) => cy.visit(`${data}/yyy`, { failOnStatusCode: false }))
  })
})
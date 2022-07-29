import { stepClass } from './steps/stepClass'

describe('spec3', () => {
  it('passes3', () => {
    cy.visit('https://example.cypress.io', { failOnStatusCode: false })
    stepClass.goToQuering()
    cy.url().then((data) => cy.visit(`${data}/yyy`, { failOnStatusCode: false }))
  })
})
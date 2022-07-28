import {stepClass} from './steps/stepClass'

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io', {failOnStatusCode: false})
    stepClass.goToQuering()
    cy.url().then((data) => cy.visit(`${data}/yyy`, {failOnStatusCode: false}))
  })
})
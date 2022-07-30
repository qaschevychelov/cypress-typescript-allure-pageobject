import { baseStep } from '../steps/BaseStep'

describe('spec4', () => {
  it('passes4', () => {
    cy.visit('https://example.cypress.io', { failOnStatusCode: false })
    cy.url().then((data) => cy.visit(`${data}/yyy`, { failOnStatusCode: false }))
  })
})
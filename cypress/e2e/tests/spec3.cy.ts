import { baseStep } from '../steps/BaseStep'

describe('spec3', () => {
  it('passes3', () => {
    cy.visit('https://example.cypress.io', { failOnStatusCode: false })
    cy.url().then((data) => cy.visit(`${data}/yyy`, { failOnStatusCode: false }))
  })
})
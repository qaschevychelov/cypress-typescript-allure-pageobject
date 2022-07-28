import { stepClass } from './steps/stepClass'

describe('spec1', () => {
  it('passes11', () => {
    cy.visit('https://example.cypress.io', { failOnStatusCode: false })
    stepClass.goToQuering()
    cy.url().then((data) => cy.visit(`${data}/yyy`, { failOnStatusCode: false }))
  })

  it('passes12', () => {
    cy.visit('https://example.cypress.io', { failOnStatusCode: false })
    stepClass.goToQuering()
    cy.url().then((data) => cy.visit(`${data}/yyy`, { failOnStatusCode: false }))
  })
  it('passes13', () => {
    cy.visit('https://example.cypress.io', { failOnStatusCode: false })
    stepClass.goToQuering()
    cy.url().then((data) => cy.visit(`${data}/yyy`, { failOnStatusCode: false }))
  })
  it('passes14', () => {
    cy.visit('https://example.cypress.io', { failOnStatusCode: false })
    stepClass.goToQuering()
    cy.url().then((data) => cy.visit(`${data}/yyy`, { failOnStatusCode: false }))
  })
  it('passes15', () => {
    cy.visit('https://example.cypress.io', { failOnStatusCode: false })
    stepClass.goToQuering()
    cy.url().then((data) => cy.visit(`${data}/yyy`, { failOnStatusCode: false }))
  })
  it('passes16', () => {
    cy.visit('https://example.cypress.io', { failOnStatusCode: false })
    stepClass.goToQuering()
    cy.url().then((data) => cy.visit(`${data}/yyy`, { failOnStatusCode: false }))
  })
  it('passes17', () => {
    cy.visit('https://example.cypress.io', { failOnStatusCode: false })
    stepClass.goToQuering()
    cy.url().then((data) => cy.visit(`${data}/yyy`, { failOnStatusCode: false }))
  })
  it('passes18', () => {
    cy.visit('https://example.cypress.io', { failOnStatusCode: false })
    stepClass.goToQuering()
    cy.url().then((data) => cy.visit(`${data}/yyy`, { failOnStatusCode: false }))
  })
})
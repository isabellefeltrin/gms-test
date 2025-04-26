/// <reference types  = "cypress"/>
describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it ('deve acessar o site de política de privacidade', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;});
    cy.visit('http://127.0.0.1:8080/')
    cy.get('a').click()
    cy.url().should('include', 'http://127.0.0.1:8080/polices.html')

  })
} )
/// <reference types  = "cypress"/>
describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve validar email inválido', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Isabelle')
    cy.get('#signup-lastname').type('Feltrin')
    cy.get('#signup-email').type('isa12teste')
    cy.get('#signup-phone').type('11234567898')
    cy.get('#signup-password').type('Teste&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response', {timeout: 10000}).should('contain', 'E-mail deve ser um email válido')
  })
})
/// <reference types  = "cypress"/>
describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Isabelle')
    cy.get('#signup-lastname').type('Feltrin')
    cy.get('#signup-email').type('isa12@teste.com')
    cy.get('#signup-phone').type('11234567898')
    cy.get('#signup-button').click()
    cy.get('#signup-response', {timeout: 10000}).should('contain', 'Senha não pode estar vazia')
  })
})
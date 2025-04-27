/// <reference types  = "cypress"/>
describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.get('#signup-firstname').type('Isabelle')
    cy.get('#signup-lastname').type('Feltrin')
    cy.get('#signup-email').type('isa12@teste.com')
    cy.get('#signup-phone').type('11234567898')
    cy.get('#signup-button').click()
    cy.get('#signup-response', {timeout: 10000}).should('contain', 'Senha não pode estar vazia')
  })
})
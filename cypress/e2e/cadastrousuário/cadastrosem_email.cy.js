/// <reference types  = "cypress"/>
describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Deve validar cadastro de email', () => {
    cy.get('#signup-firstname').type('Isabelle')
    cy.get('#signup-lastname').type('Feltrin')
    cy.get('#signup-phone').type('11234567898')
    cy.get('#signup-password').type('Teste&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response', {timeout: 10000}).should('contain', 'E-mail não pode estar vazio')
  })
})


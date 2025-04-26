/// <reference types  = "cypress"/>
describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve validar cadastro sem nome', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-lastname').type('Feltrin')
    cy.get('#signup-email').type('isa132@teste.com')
    cy.get('#signup-phone').type('11234567898')
    cy.get('#signup-password').type('Teste&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response', {timeout: 10000}).should('contain', '{"message":"Nome não pode estar vazio"}') 
  })
})
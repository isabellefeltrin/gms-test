/// <reference types  = "cypress"/>
describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#singnup-firstname').type('Isabelle')
    cy.get('#singnup-lastname').type('Feltrin')
    cy.get('#singnup-email').type('isa@teste.com')
    cy.get('#singnup-phone').type('11234567898')
    cy.get('#singnup-password').type('Teste&2020')
    cy.get('#singnup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})
/// <reference types  = "cypress"/>
describe('US-012-Funcionalidade: Cadastro de membros', () => {
  var email = `isabelle${Date.now()}@teste.com`
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('Deve validar cadastro sem sobrenome', () => {
    cy.get('#signup-firstname').type('Feltrin')
    cy.get('#signup-email').type(email)
    cy.get('#signup-phone').type('11234567898')
    cy.get('#signup-password').type('Teste&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response', {timeout: 10000}).should('contain', 'Sobrenome não pode estar vazio')
  })

  it.only('Deve validar mensagem de erro com o campo sobrenomenome inválido', () => {
    cy.PreencherCadastro('Isabelle','Feltrin30', email, '1123345534', 'Teste@1233455')
    cy.get('#signup-response', {timeout: 10000}).should('contain', 'deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })
})
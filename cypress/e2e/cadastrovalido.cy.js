/// <reference types  = "cypress"/>
describe('US-012-Funcionalidade: Cadastro de membros', () => {
      var email = `isabelle${Date.now()}@teste.com`
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.PreencherCadastro('Isabelle','Feltrin', email, '1123345534', 'Teste@1233455')
    cy.get('#signup-response', {timeout: 10000}).should('contain', 'Cadastro realizado com sucesso!')
  })

  it.only('Deve validar mensagem de erro com o campo nome inválido', () => {
    cy.PreencherCadastro('Isabelle30','Feltrin', email, '1123345534', 'Teste@1233455')
    cy.get('#signup-response', {timeout: 10000}).should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })
})
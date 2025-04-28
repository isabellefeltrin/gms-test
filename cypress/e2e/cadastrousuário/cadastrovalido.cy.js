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

  it('Deve validar mensagem de erro com o campo nome inválido', () => {
    cy.PreencherCadastro('Isabelle30','Feltrin', email, '1123345534', 'Teste@1233455')
    cy.get('#signup-response', {timeout: 10000}).should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })

  it('Deve validar cadastro sem sobrenome', () => {
    cy.get('#signup-firstname').type('Feltrin')
    cy.get('#signup-email').type(email)
    cy.get('#signup-phone').type('11234567898')
    cy.get('#signup-password').type('Teste&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response', {timeout: 10000}).should('contain', 'Sobrenome não pode estar vazio')
  })

  it('Deve validar mensagem de erro com o campo sobrenomenome inválido', () => {
    cy.PreencherCadastro('Isabelle','Feltrin30', email, '1123345534', 'Teste@1233455')
    cy.get('#signup-response', {timeout: 10000}).should('contain', 'deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })

  it('Deve validar cadastro sem nome', () => {
    cy.get('#signup-lastname').type('Feltrin')
    cy.get('#signup-email').type('isa132@teste.com')
    cy.get('#signup-phone').type('11234567898')
    cy.get('#signup-password').type('Teste&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response', {timeout: 10000}).should('contain', '{"message":"Nome não pode estar vazio"}') 
  })

  it('Deve validar campo de email', () => {
    cy.get('#signup-firstname').type('Isabelle')
    cy.get('#signup-lastname').type('Feltrin')
    cy.get('#signup-phone').type('11234567898')
    cy.get('#signup-password').type('Teste&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response', {timeout: 10000}).should('contain', 'E-mail não pode estar vazio')
  })

  it('Deve validar email inválido', () => {
    cy.get('#signup-firstname').type('Isabelle')
    cy.get('#signup-lastname').type('Feltrin')
    cy.get('#signup-email').type('isa12teste')
    cy.get('#signup-phone').type('11234567898')
    cy.get('#signup-password').type('Teste&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response', {timeout: 10000}).should('contain', 'E-mail deve ser um email válido')
  })

  it('Deve validar telefone inválido', () => {
    cy.get('#signup-firstname').type('Isabelle')
    cy.get('#signup-lastname').type('Feltrin')
    cy.get('#signup-email').type('isa12@teste.com')
    cy.get('#signup-phone').type('abcdefgh')
    cy.get('#signup-password').type('Teste&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response', {timeout: 10000}).should('contain', 'Telefone deve conter apenas números')
  })

  it('Deve validar cadastro sem senha', () => {
    cy.get('#signup-firstname').type('Isabelle')
    cy.get('#signup-lastname').type('Feltrin')
    cy.get('#signup-email').type('isa12@teste.com')
    cy.get('#signup-phone').type('11234567898')
    cy.get('#signup-button').click()
    cy.get('#signup-response', {timeout: 10000}).should('contain', 'Senha não pode estar vazia')
  })

  it('Deve validar senha fraca', () => {
    cy.get('#signup-firstname').type('Isabelle')
    cy.get('#signup-lastname').type('Feltrin')
    cy.get('#signup-email').type('isa12@teste.com')
    cy.get('#signup-phone').type('11234567898')
    cy.get('#signup-password').type('Teste')
    cy.get('#signup-button').click()
    cy.get('#signup-response', {timeout: 10000}).should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
  })
})


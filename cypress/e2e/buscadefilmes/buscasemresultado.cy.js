/// <reference types  = "cypress"/>
describe('US-001-Funcionalidade: Busca de filmes', () => {
  it('Deve retornar prompt de erro', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#search-button').click()
    cy.get('alert').should('contain', 'Por favor, digite o nome de um filme')
  })
})
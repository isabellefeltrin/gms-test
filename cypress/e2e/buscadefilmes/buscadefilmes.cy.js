/// <reference types  = "cypress"/>
describe('US-001-Funcionalidade: Busca de filmes', () => {
  it('Deve buscar filmes conforme digitado', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#search-input').type('jurassic')
    cy.get('#search-button').click()
    cy.get('#results-section').should('exist')
    cy.get('h3').should('exist').each(($h3) => {
      cy.wrap($h3).invoke('text').then((texto  => {
        expect(texto).to.include('Jurassic');
      }))
    })
  })
})
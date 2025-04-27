/// <reference types  = "cypress"/>
describe('US-001-Funcionalidade: Busca de filmes', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Deve limpar campo de busca', () => {
    cy.get('#search-input').type('jurassic')
    cy.get('#search-button').click()
    cy.get('#results-section').should('exist')
    cy.get('h3').should('exist').each(($h3) => {
      cy.wrap($h3).invoke('text').then((texto  => {
        expect(texto).to.include('Jurassic');
      }))
    })
    cy.get('#clear-button').click()
    cy.get('#search-input').should('contain','')
  })
})
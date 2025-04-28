/// <reference types  = "cypress"/>
describe('US-001-Funcionalidade: Busca de filmes', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Deve buscar filmes conforme digitado', () => {
    cy.get('#search-input').type('jurassic')
    cy.get('#search-button').click()
    cy.get('#results-section').should('exist')
    cy.get('h3').should('exist').each(($h3) => {
      cy.wrap($h3).invoke('text').then((texto  => {
        expect(texto).to.include('Jurassic');
      }))
    })
  });

  it('Deve buscar filmes com sucesso de uma lista', () => {
    cy.fixture('filmes').then((filmes) => {
      cy.get('#search-input').type(filmes[0].titulo)
    cy.get('#search-button').click()
    cy.get('#results-section').should('contain',filmes[0].titulo)
    })
  });

  it('Deve buscar filmes com sucesso da lista inteira', () => {
    cy.fixture('filmes').each((filmes) => {
      cy.get('#search-input').clear().type(filmes.titulo)
    cy.get('#search-button').click()
    cy.get('#results-section').should('contain',filmes.titulo)
    })
  });

  it('deve validar campo busca',() => {
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('teste')
    })

    cy.get('#search-button').click();
    cy.get('@teste').should('have.been.calledOnce');
    cy.get('@teste').should('have.been.calledWith','Por favor, digite o nome de um filme')
  })
})



  

/// <reference types="cypress" />

// import { faker } from '@faker-js/faker';
import '../support/commands.js'

describe('Teste de ponta a ponta E2E', () => {

  beforeEach(() => {
    cy.visit('https://ebac-jobs-e2e.vercel.app/')
  });

  afterEach(() => {
    cy.screenshot()
  });

  it('Deve renderizar as vagas', () => {
    cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
  });

  it('Deve filtrar por front-end', () => {
    cy.get('.FormVagas_campo__E1ppF').type('front-end{enter}')
    cy.get('button[type="submit"]').click()
    cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 2)
  });

  it('Deve acessar o formulário de candidatura da vaga', () => {
    cy.get('.Vaga_vagaLink__DeFkk').first().click()
    cy.get('input').should('have.length', 7)
  });

  it('Deve preencher e enviar o formulário', () => {
    cy.preencherFormulario();

    cy.on('window:alert', (conteudo) =>{
      expect(conteudo).contain('Obrigado pela candidatura!')
    })
  });

});
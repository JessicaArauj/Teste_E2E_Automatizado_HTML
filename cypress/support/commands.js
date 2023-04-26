// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//import faker from 'faker';
import { faker } from '@faker-js/faker';

Cypress.Commands.add('preencherFormulario', () => {
  cy.get('.Vaga_vagaLink__DeFkk').first().click();
  cy.get('input[name="nome-completo"]').type(faker.internet.userName());
  cy.get('input[name="email"]').type(faker.internet.email());
  cy.get('input[name="telefone"]').type(faker.phone.phoneNumber());
  cy.get('input[name="endereco"]').type(faker.address.streetAddress());
  cy.get('select[name="escolaridade"]').select('outros');
  cy.get('#linux').check();
  cy.get('.Aplicacao_button__tw2AE').click();
});

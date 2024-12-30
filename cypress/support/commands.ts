/// <reference types="cypress" />

Cypress.Commands.add('visitLocalhost', () => {
  cy.visit('');
});
// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Test Suite', function() {
    it('My First Test Case', function() {
    //test steps 
    cy.visit("https://www.toolsqa.com/");
    cy.wait(2000);
    cy.get('#the7-micro-widget-search').eq('0').should('not.be.visible');
    cy.get('.navigation > .mini-widgets > .mini-search > .searchform > .submit > .mw-icon').click();
    cy.get('#the7-micro-widget-search').eq('0').should('be.visible');
    cy.get('.navigation > .mini-widgets > .mini-search > .searchform > .submit > .mw-icon').click();
    cy.get('#the7-micro-widget-search').eq('0').should('not.be.visible');
})
})
// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Test Suite', function() {
    it('My First Test Case', function() {
    //test steps 
    cy.visit("https://www.toolsqa.com/");
    expect(true).to.be.true;
})
})
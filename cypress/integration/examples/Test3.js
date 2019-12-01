// type definitions for Cypress object "cy"
// <reference types="cypress" />

describe('My Second Test Suite', function() {
    it('My First Test Case', function() {
    //test steps 
    cy.visit("https://www.toolsqa.com/automation-practice-switch-windows/");
    cy.wait(2000);
    cy.get('p:nth-child(2) > span > a').then(function (el)
    {
        const url=el.prop('href');
        cy.log(url);
        cy.visit(url);
    })
    
})
})
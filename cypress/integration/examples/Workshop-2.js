// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Test Suite', function() {
    it('My First Test Case', function() {
    //test steps 
    cy.visit("https://www.toolsqa.com/");
    cy.wait(2000);
    cy.get('.navigation > .mini-widgets > .mini-search > .searchform > .submit > .mw-icon').click();
    cy.get('.navigation > .mini-widgets > .mini-search > .searchform > .popup-search-wrap > #the7-micro-widget-search').type('Cucumber').type('{enter}');
    //Length Assertions
    cy.get('[data-name*=Cucumber]').should('have.length',10).then(function(){
        console.log('XXXX');
    });
    //Alias Command
    cy.get('.entry-title').as('titleHeader')
    //Get and Find Command (Parent Child Chaining)
    cy.get('.wf-container-main').find('[data-name*=Cucumber]').should('have.length',10).each(($el, index, $list) => {
    const textResult= $el.find('.entry-title').text();
    console.log(textResult);
    if(textResult.includes('Data Driven Testing'))
            {
                cy.get($el).click();
            }
    })
    //Verifying Article Name on New Page
    cy.get('@titleHeader').should('contain.text','Data Driven Testing');
    //Promise Handling
    cy.get('@titleHeader').then(function(logo)
    {
        cy.log(logo.text());
    });   
    //Assertion
    cy.get('@titleHeader').should('have.text','Data Driven Testing using Json with Cucumber');
    })
  })
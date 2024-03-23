/// <reference types="Cypress" />
//cypress code - we call any test case as spec file or test file
/// Automation tool: Cypress
// Testing framewokr: Mocha
// Chai: for assersion

describe('My First Test Suite', () => {
    // hooks
    before(function(){
        //runs once before all tests in the block
        cy.fixture('example').then(function(data){
            globalThis.data = data;
        })
    })

    it('My seconds test case', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        // cy.get('.form-group input[name="name"]').type('US Man')
        // cy.get('select').select('Male')
        cy.get('.form-group input[name="name"]').type(globalThis.data.name)
        cy.get('select').select(globalThis.data.gender)
        cy.get('input[name="name"]:nth-child(2)').should('have.value', globalThis.data.name)
        cy.get('.form-group input[name="name"]').should('have.attr', 'minlength', '2')
        cy.get('#inlineRadio3').should('be.disabled')
      })
    })
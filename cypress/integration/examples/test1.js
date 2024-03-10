/// <reference types="Cypress" />
//cypress code - we call any test case as spec file or test file
/// Automation tool: Cypress
// Testing framewokr: Mocha
// Chai: for assersion

describe('My First Test Suite', () => {
    it('My first test case', () => {
      // const url = 'https://www.google.com/'
      //   cy.visit(url)
      expect(true).to.equal(true)
    })

    it.only('My seconds test case', () => {
      const url = 'https://rahulshettyacademy.com/seleniumPractise/#/'
        cy.visit(url)
        cy.get('input.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('div.products div.product').should('have.length', 4)
        cy.get('div.product:visible').should('have.length', 4)
        //parent child chaining
        cy.get('.products').find('.product').should('have.length', 4)
        //click + for index 3
        cy.get('.products').find('.product').eq(2).find('.increment').click()
        // two differen way locating element and it will click twice
        cy.get(':nth-child(3) > .product-action > button').click()
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get(':nth-child(2) > :nth-child(3) > strong').should('have.text', '180')     
        

        /// difference betwen includes mean contaisn specific string
        // eql or === means exactly same
        // const veg = 'Brown cashews'
        // veg === 'cashews' will fail return false
        // veg includes 'cashews' will pass return true

        cy.get('.products').find('.product').each(($el, index, $list) => {
          const textVeg = $el.find('h4.product-name').text()
          cy.log(textVeg)
          if (textVeg.includes('Cashews')) {
            cy.wrap($el).find('button').click()
          }
        })
        cy.log("Cypress World")
        // const brandName = cy.get('div.brand.greenLogo').text();
        // cy.log(brandName);
        // to resolve the promise we use then
        cy.get('div.brand.greenLogo').then(function(logoElement) {
          const brandName = logoElement.text()
            cy.log(brandName)
            cy.get('div.brand.greenLogo').should('have.text', 'GREENKART')
            cy.get('div.brand.greenLogo').should('include.text', 'EENKAR');
        })

        cy.get('.brand').should('have.text', 'GREENKART')
        cy.get('.cart-icon > img').click()
        cy.get('.action-block > button').contains('PROCEED TO CHECKOUT').click()
        cy.get('button').contains('Place Order').click()
        cy.get('select > option').should('have.length', 209)
        cy.get('select > option').should('have.length.gt', 208)
        cy.get('select > option').should('have.length.lte', 209)


        expect(true).to.equal(true)
        
      })

    it('My third test case', () => {
        expect(true).to.equal(true)
      })
  })


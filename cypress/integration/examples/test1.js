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
    //ipmlicit wait it will always wait for whatever time you given
    cy.wait(5000)
    // explicit wait (10 seconds), only wait till element is visible or clickable
    // will wait till element is visible or clickable, soon 
    cy.get('div.products div.product').should('have.length', 4)
    cy.get('div.product:visible').should('have.length', 4)
    //parent child chaining  // alias command
    // const ab = "alias"
    cy.get('.products').as('prodLocator');
    cy.get('@prodLocator').find('.product').should('have.length', 4)
    //click + for index 3
    cy.get('@prodLocator').find('.product').eq(2).find('.increment').click()
    // two differen way locating element and it will click twice
    cy.get(':nth-child(3) > .product-action > button').click()
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    cy.get(':nth-child(2) > :nth-child(3) > strong').should('have.text', '180')


    /// difference betwen includes mean contaisn specific string
    // eql or === means exactly same
    // const veg = 'Brown cashews'
    // veg === 'cashews' will fail return false
    // veg includes 'cashews' will pass return true

    cy.get('@prodLocator').find('.product').each(($el, index, $list) => {
      const textVeg = $el.find('h4.product-name').text()
      cy.log(textVeg)
      if (textVeg.includes('Cashews')) {
        cy.wrap($el).find('button').click()
      }
    })

    //non cypres function
    // const logoo = cy.get('.brand').text();
    // cy.log(logoo)
    // cy.get('.brand').text

    // const brandName = cy.get('div.brand.greenLogo').text();
    // cy.log(brandName);
    // to resolve the promise we use then
    // .text() is jquery command but it is non cypress command
    //non cypress comman cannot resolve promise by themselves, we nee to manually
    // resolve it by then()

    cy.get('div.brand.greenLogo').then(function (logoElement) {
      const brandName = logoElement.text()
      cy.log(brandName)
      cy.get('div.brand.greenLogo').should('have.text', 'GREENKART')
      cy.get('div.brand.greenLogo').should('include.text', 'EENKAR');
    })

    //cypress directs run on your browser, cypress runner dev tools
    console.log("Cypress World")
    cy.log('Cypres World')


    cy.get('.brand').should('have.text', 'GREENKART')
    cy.get('.cart-icon > img').click()
    // cy.get('.action-block > button').contains('PROCEED TO CHECKOUT').click()
    cy.contains('PROCEED TO CHECKOUT').click();
    cy.get('button').contains('Place Order').click()
    cy.get('select > option').should('have.length', 209)
    cy.get('select > option').should('have.length.gt', 208)
    cy.get('select > option').should('have.length.lte', 209).then(function () {
      console.log('Cypress World')
      cy.log('Cypress World')
    })




    expect(true).to.equal(true)

  })

  it('My third test case', () => {
    expect(true).to.equal(true)
  })
})


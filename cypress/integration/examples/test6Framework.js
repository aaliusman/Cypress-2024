/// <reference types="Cypress" />
import HomePage from "../pageObjects/HomePage";
import ProductsPage from "../pageObjects/ProductsPage";
//cypress code - we call any test case as spec file or test file
/// Automation tool: Cypress
// Testing framewokr: Mocha
// Chai: for assersion

describe('Cypress Framework', () => {
    // hooks
    before(function () {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        // runs once before all tests in the block
        cy.fixture('example').then(function (data) {
            globalThis.data = data;
        })
    })

    it('Proto Commerce Home Page', () => {
        // Cypress.config('defaultCommandTimeout', 9000)

        // cy.get('.form-group input[name="name"]').type('US Man')
        // cy.get('select').select('Male')
        // cy.get('.form-group input[name="name"]').type(globalThis.data.name)
        // cy.get('select').select(globalThis.data.gender)
        // cy.get('input[name="name"]:nth-child(2)').should('have.value', globalThis.data.name)
        // cy.get('.form-group input[name="name"]').should('have.attr', 'minlength', '2')
        // to debug your code
        // cy.pause()
        // cy.get('#inlineRadio2').should('be.enabled')
        // cy.get('#inlineRadio3').should('be.disabled')
        // cy.contains('a', 'Shop').click()
        // cy.get('h4.card-title').each(($el, index) => {
        //     if ($el.text().includes('Blackberry')) {
        //         cy.get('button.btn.btn-info').eq(index).click()
        //         cy.get('.nav-link.btn.btn-primary').then(function (element) {
        //             const actualText = element.text()// Checkout ( 1 )
        //             expect(actualText.includes('1')).to.be.true
        //             })
        //         }
        // })
        // cy.selectProduct('iphone X')
        // cy.selectProduct('Blackberry')

        // ["Blackberry", "iphone X"]
        // globalThis.data.productName.forEach(function (prodcut) {
        //     cy.selectProduct(prodcut)
        // })
        const homePage = new HomePage();
        const productsPage = new ProductsPage();
        // const productsPage = new ProductsPage();
        homePage.getEditNameBox().type(globalThis.data.name)
        homePage.getGender().select(globalThis.data.gender)
        homePage.getTwoDataBinding().should('have.value', globalThis.data.name)
        homePage.getEntrepreneur().should('be.disabled')
        homePage.getEmployedRadioButton().should('be.enabled')
        homePage.getShopTab().click()

        globalThis.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })
        productsPage.getCheckoutButton().click()
        cy.get('.btn.btn-success').click()
        cy.get('#country').type('Pakistan')
        cy.get('.suggestions > ul > li > a').click()
        // cy.get('.suggestions > ul > li > a').click()
        cy.get('.checkbox.checkbox-primary > input').click({force: true})
        cy.get('input[type="submit"]').click()
        // cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function(element){
            const actualText = element.text()
            expect(actualText.includes('Success')).to.be.true
        })
    })
})
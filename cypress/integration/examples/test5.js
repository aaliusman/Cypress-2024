/// <reference types="Cypress" />
//cypress code - we call any test case as spec file or test file
/// Automation tool: Cypress
// Testing framewokr: Mocha
// Chai: for assersion

describe('My First Test Suite', () => {
    it('My seconds test case', () => {
        const monthNumber = '8'
        const date = '14'
        const year = '2025'
        const expectedDelDate = [monthNumber, date, year]
        const url = 'https://rahulshettyacademy.com/seleniumPractise/#/offers'
        cy.visit(url)
        cy.get('.react-date-picker__calendar-button').click()
        cy.get('.react-calendar__navigation__label__labelText').click()
        cy.get('.react-calendar__navigation__label__labelText').click()
        cy.contains('button', year).click();
        cy.get('.react-calendar__year-view__months__month').eq(Number(monthNumber-1)).click()
        cy.contains('abbr', date).click();
        // 2025-08-14  8142025  year+'-'+'0'+monthNumber+'-'+date
        // cy.log(cy.get('.react-date-picker__calendar-button').text)
        cy.get("div input[name='date']").should('have.value', year+'-'+'0'+monthNumber+'-'+date)
        //for loop through each element
        cy.get('.react-date-picker__inputGroup__input').each(($el, index) => {
                cy.get($el).should('have.value', expectedDelDate[index])
        })
      })
    })
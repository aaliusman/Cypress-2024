import 'cypress-iframe'

describe('Automation Practice Test Suite', () => {
    it('How to handle iframe', () => {
      const url = "https://rahulshettyacademy.com/AutomationPractice/"
      cy.visit(url)
      //npm install -D cypress-iframe
      // then import it

      // to load iframe we need .frameLoaded
      cy.frameLoaded('#courses-iframe')
      cy.iframe().find('a[href*="mentorship"]').eq(0).click();
      cy.wait(4000)
      cy.iframe().find('h1[class*="pricing-title"]', {timeout: 10000}).should('have.length', 2)

    })
  })

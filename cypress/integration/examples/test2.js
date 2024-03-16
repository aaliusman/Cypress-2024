
describe('Automation Practice Test Suite', () => {
    it('Different type of elements on page test', () => {
      const url = "https://rahulshettyacademy.com/AutomationPractice/"
      cy.visit(url)

      cy.get('label[for="bmw"]').then(function(optText) {
        const optTex1 = optText.text()
          cy.log(optTex1)
      })
      
      cy.get('#checkBoxOption1')
    .check()
    .should('be.checked')
    .and('have.value', 'option1')
    .get('label[for="bmw"]')
    .should('contain', 'Option1');
    
      cy.get('#checkBoxOption2').should('not.be.checked')
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1')
      cy.get('#checkbox-example input').check(['option2', 'option3', 'option1'])
      cy.get('select').select('option3')

      //dynamic drop down
      cy.get('#autocomplete').type('Ban')

      // each funciton forloop, go through mulitiple elements on page
      cy.get('.ui-menu-item div').each(($el, index, $list) => {
        if ($el.text() === 'Bangladesh') {
          cy.wrap($el).click();
        }
      })

      cy.get('label[for="radio3"] input').click()
      cy.get('label[for="radio2"] input').click()
    })
  })
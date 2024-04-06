describe('Automation Practice Test Suite', () => {
    it.skip('Different type of elements on page test', () => {
      const url = "https://rahulshettyacademy.com/AutomationPractice/"
      cy.visit(url)

      // alert button or popups, cypress auto accepts popup and alerts
      cy.get('input[name="enter-name"]').type('Usman')
      cy.get('#alertbtn').click()
      cy.get('input[name="enter-name"]').type('Usman')
      cy.get('input[value="Confirm"]').click()
      //cypress has capability to lisen to browser events
      //window:alert will be triggered, you can use that to validat alert text
      cy.on('window:alert', (str) => {
        //Mocha/chai for assertion to compare two strings
        expect(str).to.equal('Hello Usman, share this practice page and share your knowledge')
      })

      //window:confirm 
      cy.on('window:confirm', (strng) => {
        //Mocha to compare two strings
        expect(strng).to.equal('Hello Usman, Are you sure you want to confirm?')
      })
    })

    //how to handle child windows in cypress
    it.skip('How to handle mulitple tabs', () => {
        const url = "https://rahulshettyacademy.com/AutomationPractice/"
        cy.visit(url)
        //how to handle child windows in cypress
        // removeAttr is static, remains same, attribute name would differ
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        // cy.get('li[class="nav-item"] a[href*="about"]').click()

        //Cypress doesn't switch domain automatically // in cross domain
        // you have do it by using cy.origin(url)
        cy.origin('https://www.qaclickacademy.com/', () => {
            cy.get('li[class="nav-item"] a[href*="about"]').click()
            cy.get('.section-title.mt-50 h2').should('contain', 'Welcome to QAClick Academy')
        })
        // it won't work here because of different domain
        // cy.get('.section-title.mt-50 h2').should('contain', 'Welcome to QAClick Academy')
      })

      it('How to handle web tables', () => {
        const url = "https://rahulshettyacademy.com/AutomationPractice/"
        cy.visit(url)
        
        // we use each command to run through mulitple elements with same locator
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text();
            cy.log(index)
            cy.log(text)
            if (text.includes('WebSecurity')) {
              cy.get('tr td:nth-child(2)').eq(index).should('have.text', 'WebSecurity Testing for Beginners-QA knowledge to next level') 
              // .next go to next sibling
              cy.get('tr td:nth-child(2)').eq(index).next().should('have.text', '20')
             
              // this function will do the same thing which did line 55
              cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                //siblings seletorcs to go to next sibling
                const priceText = price.text();
                expect(priceText).to.equal('20')
              })
            }
          })
          /// Go to price column, look for price 25, store all the price in one varialbe
          // using assertion make sure they sum up to 100
          // hint parseInt
      })

      it.only('How to handle mouse hover', () => {
        const url = "https://rahulshettyacademy.com/AutomationPractice/"
        cy.visit(url)

        //Make it visible using jquery method
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', '#top')
      })
  })
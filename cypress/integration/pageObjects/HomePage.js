class HomePage {

    getEditNameBox () {
        return cy.get('.form-group input[name="name"]')
    }

    getTwoDataBinding () {
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getGender() {
        return cy.get('select')
    }

    getEntrepreneur() {
        return cy.get('#inlineRadio3')
    }

    getShopTab () {
        return cy.contains('a', 'Shop')
    }

    getEmployedRadioButton() {
        return cy.get('#inlineRadio2')
    }
}
export default HomePage;

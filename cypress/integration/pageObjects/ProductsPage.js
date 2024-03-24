class ProductsPage {

    getCheckoutButton () {
        return cy.contains('a', 'Checkout')
    }

    // getTwoDataBinding () {
    //     return cy.get('input[name="name"]:nth-child(2)')
    // }

    // getGender() {
    //     return cy.get('select')
    // }

    // getEntrepreneur() {
    //     return cy.get('#inlineRadio3')
    // }

    // getShopButton () {
    //     return cy.contains('a', 'Shop')
    // }
}
export default ProductsPage;
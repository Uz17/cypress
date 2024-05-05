describe('MyFirstTest', () => {
    it('visit', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder = 'Username']").type('Admin')
        cy.get("input[placeholder = 'Password']").type('admin123')
        cy.get("button[type = 'submit']").click()
        cy.get("ul[class*='oxd-main-menu'] li a:contains('PIM')").click()
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click()
        cy.get("input[placeholder='First Name']").type('user')
        cy.get("input[placeholder='Middle Name']").type('created')
        cy.get("input[placeholder='Last Name']").type('uzi')
        cy.get("button[type='submit']").click()
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").type('996633')
        cy.get("div[class='oxd-select-text oxd-select-text--focus'] div[class='oxd-select-text-input']").type('Bangladesh').click()



    })
})
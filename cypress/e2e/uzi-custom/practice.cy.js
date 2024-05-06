


describe('MyFirstTest', () => {
    it('LoginCreateUpdate', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder = 'username']").type('Admin')
        cy.get("input[placeholder = 'password']").type('admin123')
        cy.get("button[type = 'submit']").click()
        cy.get("ul[class*='oxd-main-menu'] li a:contains('PIM')").click()
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click()
        cy.get("input[placeholder='First name']").type('user')
        cy.get("input[placeholder='Middle name']").type('created')
        cy.get("input[placeholder='Last Name']").type('uzi')
        cy.get("button[type='submit']").click()
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").type('996633')
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)").click()
        cy.contains("Bangladeshi").click()
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)").click()
        cy.contains("Single").click()
        cy.get("div[class='orangehrm-horizontal-padding orangehrm-vertical-padding'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) input:nth-child(1)").type('1997-17-11')
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > label:nth-child(1)").click()
        cy.get("div[class='orangehrm-horizontal-padding orangehrm-vertical-padding'] button[type='submit']").click()
        cy.get("div[class='orangehrm-custom-fields'] div[class='orangehrm-card-container'] form[class='oxd-form'] div[class='oxd-form-row'] div[class='oxd-grid-3 orangehrm-full-width-grid'] div[class='oxd-grid-item oxd-grid-item--gutters'] div[class='oxd-input-group oxd-input-field-bottom-space'] div div[class='oxd-select-text oxd-select-text--active']").click()
        cy.contains("O+").click()
        cy.get("div[class='orangehrm-custom-fields'] button[type='submit']").click()

    })

})

describe('MySecondTest', () => {
    it('Search', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder = 'username']").type('Admin')
        cy.get("input[placeholder = 'password']").type('admin123')
        cy.get("button[type = 'submit']").click()
        cy.get("ul[class*='oxd-main-menu'] li a:contains('PIM')").click()
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(2)").type("uzi")
        cy.get("button[type='submit']").click()

    })
})
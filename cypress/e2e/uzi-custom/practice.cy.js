


describe('MyFirstTest', () => {
    it('LoginCreateUpdate', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder = 'Username']").type('Admin')
        cy.get("input[placeholder = 'Password']").type('admin123')
        cy.get("button[type = 'submit']").click()
        cy.get("ul[class*='oxd-main-menu'] li a:contains('PIM')").click()
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click()
        cy.get("input[placeholder='First Name']").type('uzi')
        cy.get("input[placeholder='Middle Name']").type('created')
        cy.get("input[placeholder='Last Name']").type('user')
        cy.contains('.oxd-label', 'Employee Id').parent().siblings().find('.oxd-input.oxd-input--active').clear().type('1111')
        cy.get("button[type='submit']").click()
        cy.contains('.oxd-label', 'Other Id').parent().siblings().find('input.oxd-input.oxd-input--active').type('9999')
        cy.contains('.oxd-label', 'Nationality').parent().siblings().find('.oxd-select-text.oxd-select-text--active').click()
        cy.contains("Bangladeshi").click()
        cy.contains('.oxd-label', 'Marital Status').parent().siblings().find('.oxd-select-text.oxd-select-text--active').click()
        cy.contains("Single").click()
        cy.contains('.oxd-label', 'Date of Birth').parent().siblings().find('.oxd-input.oxd-input--active').type('1997-17-11')
        cy.get("div[class='orangehrm-horizontal-padding orangehrm-vertical-padding'] button[type='submit']").click()
        cy.contains('.oxd-label', 'Blood Type').parent().siblings().find('.oxd-select-text.oxd-select-text--active').click();
        cy.contains("O+").click()
        cy.get("div[class='orangehrm-custom-fields'] button[type='submit']").click()

    })

})

describe('MySecondTest', () => {
    it('Search', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder = 'Username']").type('Admin')
        cy.get("input[placeholder = 'Password']").type('admin123')
        cy.get("button[type = 'submit']").click()
        cy.get("ul[class*='oxd-main-menu'] li a:contains('PIM')").click()
        cy.contains('.oxd-label', 'Employee Id').parent().siblings().find('.oxd-input.oxd-input--active').type('1111')
        cy.get("button[type='submit']").click()
        cy.wait(5000)
        cy.get("button[type = 'button'] .oxd-icon.bi-trash").click()
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin']").click()

    })
})
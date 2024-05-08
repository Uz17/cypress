import { locators } from "../Locators/Locators";

class Login {
    static visitLoginPage() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
    static login(username, password) {
        cy.get(locators.loginPage.usernameInput).type(username);
        cy.get(locators.loginPage.passwordInput).type(password);
        cy.get(locators.loginPage.loginButton).click();
    }
}
class AddUser {
    static addUser(fname, mname, lname) {

        cy.get(locators.mainMenu.pimLink).click()
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click()
        cy.get(locators.employeeForm.firstNameInput).type(fname)
        cy.get(locators.employeeForm.middleNameInput).type(mname)
        cy.get(locators.employeeForm.lastNameInput).type(lname)
        cy.contains('.oxd-label', 'Employee Id').parent().siblings().find('.oxd-input.oxd-input--active').clear().type('1111')
        cy.get("button[type='submit']").click()
    }
}

class UpdateEmp {
    static updateUser() {
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
    }
}

class SearchEmp {
    static searchEmp(id) {
        cy.get(locators.mainMenu.pimLink).click()
        cy.contains('.oxd-label', 'Employee Id').parent().siblings().find('.oxd-input.oxd-input--active').type(id)
        cy.get("button[type='submit']").click()
        cy.wait(5000)
    }
}
class DeleteEmp {
    static deleteEmp() {
        cy.get(locators.searchPage.deleteButton).click()
        cy.get(locators.searchPage.confirmDeleteButton).click()
    }
}
export { Login, AddUser, UpdateEmp, SearchEmp, DeleteEmp };
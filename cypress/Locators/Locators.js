export const locators = {
    loginPage: {
        usernameInput: "input[placeholder='Username']",
        passwordInput: "input[placeholder='Password']",
        loginButton: "button[type='submit']"
    },
    mainMenu: {
        pimLink: "ul[class*='oxd-main-menu'] li a:contains('PIM')"
    },
    employeeForm: {
        firstNameInput: "input[placeholder='First Name']",
        middleNameInput: "input[placeholder='Middle Name']",
        lastNameInput: "input[placeholder='Last Name']",
    },
    customFieldsForm: {
        submitButton: "div.orangehrm-custom-fields button[type='submit']"
    },
    searchPage: {
        deleteButton: "button[type='button'] .oxd-icon.bi-trash",
        confirmDeleteButton: "button.oxd-button.oxd-button--medium.oxd-button--label-danger.orangehrm-button-margin"
    }
};

import { locators } from "../Locators/Locators";

class Login {
    setUserName(username) {
        cy.get(Locators.loginPage.usernameInput).type(username);
    }
    setPassword(password) {
        cy.get(Locators.loginPage.passwordInput).type(password);
    }
    clickSubmit() {
        cy.get(Locators.loginPage.loginButton).click()
    }
}

export default Login;
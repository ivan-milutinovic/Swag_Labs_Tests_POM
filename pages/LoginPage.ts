import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

    //lokatori
    get userNameInput() {
        return this.page.locator('#user-name');
    }

    get passwordInput() {
        return this.page.locator('#password');
    }

    get loginButton() {
        return this.page.locator('#login-button');
    }

    get errorMessage() {
        return this.page.locator('h3[data-test="error"]');
    }

    //funkcije
    async login(username: string, password: string) {
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

}
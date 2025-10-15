import { BasePage } from "./BasePage";

export class CheckoutFlow extends BasePage {

    //lokatori
    get firstNameInput() { 
        return this.page.locator('[data-test="firstName"]'); 
    }

    get lastNameInput() { 
        return this.page.locator('[data-test="lastName"]'); 
    }

    get postalCodeInput() { 
        return this.page.locator('[data-test="postalCode"]'); 
    }

    get continueButton() { 
        return this.page.locator('[data-test="continue"]'); 
    }

    get finishButton() { 
        return this.page.locator('[data-test="finish"]'); 
    }

    get completeHeader() { 
        return this.page.locator('.complete-header'); 
    }

    //funkcije
    async fillInformation(firstName: string, lastName: string, zipCode: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(zipCode);
        await this.continueButton.click();
    }

    async finalizeOrder() {
        await this.finishButton.click();
    }

}
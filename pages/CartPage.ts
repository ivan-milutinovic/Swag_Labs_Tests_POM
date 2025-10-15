import { expect } from "@playwright/test";

import { BasePage } from "./BasePage";

export class CartPage extends BasePage {

    //lokatori
    get checkoutButton() {
        return this.page.locator('[data-test="checkout"]');
    }

    get cartItem() {
        return this.page.locator('.cart_item');
    }

    //funkcije
    async verifyCartItemCount(expectedCount: number) {
        const actualCount = await this.cartItem.count();
        expect(actualCount).toBe(expectedCount);
    }

    async startCheckout() {
        await this.checkoutButton.click();
    }

}
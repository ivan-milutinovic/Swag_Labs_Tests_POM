import { BasePage } from "./BasePage";

export class InventoryPage extends BasePage {

    //lokatori
    get productTitle() {
        return this.page.locator('.title');
    }

    get cartIcon() {
        return this.page.locator('.shopping_cart_link');
    }

    get cartBadge() {
        return this.page.locator('.shopping_cart_badge');
    }

    get productAddToCartButton() {
        return this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    //funkcije
    async addProductToCart() {
        await this.productAddToCartButton.click();
    }

    async goToCart() {
        await this.cartIcon.click();
    }

}
import { test as baseTest } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutFlow } from '../pages/CheckoutFlow';

type fixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
    checkoutFlow: CheckoutFlow;
}

export const test = baseTest.extend<fixtures>({

    loginPage: async ({ page }, use ) => {
        await use(new LoginPage(page));
    },
    inventoryPage: async ({ page }, use ) => {
        await use(new InventoryPage(page));
    },
    cartPage: async ({ page }, use ) => {
        await use(new CartPage(page));
    },
    checkoutFlow: async ({ page }, use ) => {
        await use(new CheckoutFlow(page));
    },
    
});

export { expect } from '@playwright/test';
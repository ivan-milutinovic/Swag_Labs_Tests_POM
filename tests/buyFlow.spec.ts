import { test, expect } from './baseTest'; 

import { CUSTOMER_INFO, USERS } from '../data/data';

test.describe('Swag Labs Buy Flow Test', () => {

    // Koristi se beforeEach za postavljanje preduslova (logovanje)
    test.beforeEach(async ({ page, loginPage, inventoryPage }) => {
        await loginPage.goto(); 
        await loginPage.login(USERS.correct.username, USERS.correct.password);
        await expect(inventoryPage.productTitle).toBeVisible(); 
    });

    // Test sada zahteva samo objekte koji mu trebaju (injektuju se)
    test('Test celog procesa kupovine', async ({ page, inventoryPage, cartPage, checkoutFlow }) => {

        // Logovanje je obavljeno u beforeEach
        
        //2. dodavanje u korpu
        await test.step('1. dodavanje u korpu', async () => {
            await inventoryPage.addProductToCart();
            await expect(inventoryPage.cartBadge).toHaveText('1');
        });

        //3. korpa i pocetak kupovine
        await test.step('2. korpa', async () => {
           await inventoryPage.goToCart();
            await cartPage.verifyCartItemCount(1); 
            await cartPage.startCheckout();
        });

        //4. unos podataka i finalizacija kupovine
        await test.step('3. unos podataka', async () => {
            await checkoutFlow.fillInformation(CUSTOMER_INFO.firstName, CUSTOMER_INFO.lastName, CUSTOMER_INFO.zipCode);
            await expect(page).toHaveURL(/checkout-step-two.html$/); 
        });

        //5. provera uspesne kupovine
        await test.step('4. provera uspesne kupovine', async () => {
            await checkoutFlow.finalizeOrder();
            await expect(checkoutFlow.completeHeader).toHaveText('Thank you for your order!');
            await expect(page).toHaveURL(/checkout-complete.html$/);
        });
    });
});
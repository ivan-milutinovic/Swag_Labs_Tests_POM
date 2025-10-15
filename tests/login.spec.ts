import { test, expect } from './baseTest';

import { NEGATIVE_TEST_CASE_DATA, USERS } from '../data/data';

test.describe('Swag Labs Login Test', () => {

    //pre svakog testa
    test.beforeEach( async ({ page, loginPage }) => {
        await loginPage.goto();
    });

    //posle svakog testa
    // test.afterEach( async ({ page }) => {
    //     await page.context().clearCookies();
    //     await page.evaluate(() => window.localStorage.clear());
    // });        

    //uspesan test logovanja
    test('USPESNO LOGOVANjE - ispravni kredencijali', async ({ page, loginPage, inventoryPage }) => {        
        //popunjavanje login forme
        await loginPage.login(USERS.correct.username, USERS.correct.password);
        //asertacija
        await expect(inventoryPage.productTitle).toBeVisible();
        await expect(page).toHaveURL(/inventory.html$/);
    });

    //neuspesan test logovanja
    for (const testCase of NEGATIVE_TEST_CASE_DATA) {
        test(`NEUSPESNO LOGOVANjE - ${testCase.name}`, async ({ loginPage }) => {
            //popunjavanje login forme
            await loginPage.login(testCase.user, testCase.password);
            //asertacija
            await expect(loginPage.errorMessage).toHaveText(testCase.errorMessage);
            await expect(loginPage.errorMessage).toBeVisible();
        })
    }
});
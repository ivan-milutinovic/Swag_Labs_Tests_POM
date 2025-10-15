import { Page } from '@playwright/test';

import { BASE_URL } from '../data/data';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async goto() {
        await this.page.goto(BASE_URL);
    }
}
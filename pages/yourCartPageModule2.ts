import { Locator,Page,expect } from "@playwright/test";

export class YourCartPageModule2ForCheckout {
    page : Page;
    checkout:Locator

    constructor (page : Page) {
        this.page = page;
        this.checkout = page.locator("#checkout");
    }

    async checkoutButton(){
        await this.checkout.click();
    }
}
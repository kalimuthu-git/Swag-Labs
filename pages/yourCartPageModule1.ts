import { Locator,expect,Page } from "@playwright/test";
export class YourCartPageModule1 {
    page : Page
    remove : Locator;
    continueShoping : Locator;
    
    constructor (page : Page) {
        this.page = page;
        this.remove = page.locator("#remove-sauce-labs-backpack");
        this.continueShoping = page.locator("#continue-shopping");
    }

    async navigate (url: string) {
        await this.page.goto("https://www.saucedemo.com/cart.html");
    }
    async yourCartPageModule1() {
       await this.remove.click();
       await this.continueShoping.click();

    }
}
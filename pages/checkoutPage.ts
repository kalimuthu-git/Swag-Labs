import { Locator,Page,expect } from "@playwright/test";

export class CheckoutPage {
    page : Page;
    firstName : Locator;
    lastName : Locator;
    postalCode : Locator;
    continueButton : Locator;


    constructor (page : Page) {
       this.page = page;
       this.firstName = page.getByPlaceholder("First Name");
       this.lastName = page.getByPlaceholder("Last Name");
       this.postalCode = page.getByPlaceholder("Zip/Postal Code");
       this.continueButton = page.locator("#continue");
    }

    async navigate (url : string) {
        await this.page.goto("https://www.saucedemo.com/checkout-step-one.html")
    }
    async checkout(){
        await this.firstName.fill("Kalimuthu");
        await this.lastName.fill("Annadurai");
        await this.postalCode.fill("600089");
        await this.continueButton.click();

    }
}
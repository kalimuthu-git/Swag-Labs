import { Locator,Page,Expect } from "@playwright/test";

export class OverviewPage {
    page : Page;
    // qty : Locator;
    // description : Locator;
    // productName : Locator;
    // prodPrice : Locator;
    // paymentInfo : Locator;
    // shippingInfo : Locator;
    // priceTotal : Locator;
    // itemTotal : Locator;
    // tax : Locator;
    // price : Locator;
    finishButton : Locator;


    constructor (page : Page){
        this.page = page;
        // this.qty = page.locator(".cart_quantity_label");
        // this.description = page.locator(".cart_desc_label");
        // this.productName = page.getByText("Sauce Labs Backpack");
        // this.prodPrice = page.locator(".inventory_item_price");
        // this.paymentInfo = page.getByText("Payment Information:");
        // this.shippingInfo = page.getByText("Shipping Information:");
        // this.priceTotal = page.getByText("Price Total");
        // this.itemTotal = page.
        // this.tax = page.
        // this.price = page
        this.finishButton = page.locator("#finish");
    }

    async navigate (url : string){
        await this.page.goto("https://www.saucedemo.com/checkout-step-two.html");
    }
    async finished(){
        await this.finishButton.click();
    }
}
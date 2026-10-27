import { Locator,test,Page,expect } from "@playwright/test";

export class CompletePage {
    page : Page;
    tickMark : Locator;
    thankText : Locator;
    content : Locator;
    pdf : Locator;
    backButton : Locator;


    constructor (page : Page) {
        this.page = page;
        this.tickMark = page.locator('[data-test="pony-express"]');
        this.thankText = page.locator('[data-test="complete-header"]');
        this.content = page.locator('[data-test="complete-text"]');
        // const downloadPromise = page.waitForEvent('download');
        this.pdf = page.locator('[data-test="generate-pdf-order"]');
        // const download = downloadPromise;
        this.backButton = page.locator('[data-test="back-to-products"]');

    }

    async navigate(url : string ){
        await this.page.goto("https://www.saucedemo.com/checkout-complete.html");
    }
    async completePage(){
        await expect(this.tickMark).toBeVisible();
        expect(this.thankText).toContainText('Thank you for your order!');
        // console.log(thank);
        expect(this.content).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        // console.log(content);
        await this.pdf.click();
        await this.backButton.click();

        
    }

}
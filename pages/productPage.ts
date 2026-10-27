import { Expect,Page,Locator } from "@playwright/test";

export class productPage{
    page:Page;
    addToCart:Locator;
    remove:Locator;
    addToCart1:Locator;
    cartButton:Locator;


    constructor(page:Page){
        this.page=page;
        this.addToCart = page.locator("#add-to-cart-sauce-labs-backpack");
        this.remove = page.locator("#remove-sauce-labs-backpack");
        this.addToCart1 = page.locator("#add-to-cart-sauce-labs-backpack");
        this.cartButton = page.getByLabel("Cart, 1 items");

    }
    async navigate (url:string){
        await this.page.goto("https://www.saucedemo.com/inventory.html");
    }
    async productPage(){
        await this.addToCart.click();
        await this.remove.click();
        await this.addToCart1.click();
        await this.cartButton.click();
    }

}
import {test} from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { productPage } from "../pages/productPage";
import { YourCartPageModule1 } from "../pages/yourCartPageModule1";
import { YourCartPageModule2ForCheckout } from "../pages/yourCartPageModule2";
import { CheckoutPage } from "../pages/checkoutPage";
import { OverviewPage } from "../pages/overViewPage";
import { CompletePage } from "../pages/completedPage";


test ("loginPage",async({page})=>{
    const loginObj = new LoginPage (page);
    await loginObj.navigate("url");
    await loginObj.loginMethod("standard_user","secret_sauce");
    await page.waitForTimeout(3000);
})

test("productSelect",async({page})=>{
    const loginObj = new LoginPage (page);
    await loginObj.navigate("url");
    await loginObj.loginMethod("standard_user","secret_sauce");


    const prodObj = new productPage (page);
    await prodObj.navigate("https://www.saucedemo.com/inventory.html");
    await prodObj.productPage();
    await page.waitForTimeout(3000);

})

test ("YourCartPage1" , async({page})=>{
    const loginObj = new LoginPage (page);
    await loginObj.navigate("url");
    await loginObj.loginMethod("standard_user","secret_sauce");
    const prodObj = new productPage (page);
    await prodObj.navigate("https://www.saucedemo.com/inventory.html");
    await prodObj.productPage();


    const yourCartPage = new YourCartPageModule1 (page);
    await yourCartPage.navigate("url");
    await page.waitForTimeout(3000);   
    await yourCartPage.yourCartPageModule1();
})

test ("YourCartPage1ForCheckout" , async ({page})=>{
    const loginObj = new LoginPage (page);
    await loginObj.navigate("url");
    await loginObj.loginMethod("standard_user","secret_sauce");
    const prodObj = new productPage (page);
    await prodObj.navigate("https://www.saucedemo.com/inventory.html");
    await prodObj.productPage();
    const yourCartPage = new YourCartPageModule1 (page);
    await yourCartPage.navigate("url");


    const checkoutProd = new YourCartPageModule2ForCheckout (page);
    await page.waitForTimeout(2000);
    await checkoutProd.checkoutButton();
})

test ("checkout page" , async ({page})=>{
    const loginObj = new LoginPage (page);
    await loginObj.navigate("url");
    await loginObj.loginMethod("standard_user","secret_sauce");
    const prodObj = new productPage (page);
    await prodObj.navigate("https://www.saucedemo.com/inventory.html");
    await prodObj.productPage();
    const yourCartPage = new YourCartPageModule1 (page);
    await yourCartPage.navigate("url");
    const checkoutProd = new YourCartPageModule2ForCheckout (page);
    await page.waitForTimeout(2000);
    await checkoutProd.checkoutButton();

    const checkout = new CheckoutPage (page);
    await checkout.navigate("url");
    await page.waitForTimeout(2000);
    await checkout.checkout();
})

test ("finishButton" , async({page})=>{
    const loginObj = new LoginPage (page);
    await loginObj.navigate("url");
    await loginObj.loginMethod("standard_user","secret_sauce");
    const prodObj = new productPage (page);
    await prodObj.navigate("https://www.saucedemo.com/inventory.html");
    await prodObj.productPage();
    const yourCartPage = new YourCartPageModule1 (page);
    await yourCartPage.navigate("url");
    const checkoutProd = new YourCartPageModule2ForCheckout (page);
    // await page.waitForTimeout(2000);
    await checkoutProd.checkoutButton();
    const checkout = new CheckoutPage (page);
    await checkout.navigate("url");
    // await page.waitForTimeout(2000);
    await checkout.checkout();

    const finishButton = new OverviewPage (page);
    await finishButton.navigate("url");
    await finishButton.finished();
})

test ("complete page" , async ({ page })=>{
    const loginObj = new LoginPage (page);
    await loginObj.navigate("url");
    await loginObj.loginMethod("standard_user","secret_sauce");
    const prodObj = new productPage (page);
    await prodObj.navigate("https://www.saucedemo.com/inventory.html");
    await prodObj.productPage();
    const yourCartPage = new YourCartPageModule1 (page);
    await yourCartPage.navigate("url");
    const checkoutProd = new YourCartPageModule2ForCheckout (page);
    // await page.waitForTimeout(2000);
    await checkoutProd.checkoutButton();
    const checkout = new CheckoutPage (page);
    await checkout.navigate("url");
    // await page.waitForTimeout(2000);
    await checkout.checkout();
    const finishButton = new OverviewPage (page);
    await finishButton.navigate("url");
    await finishButton.finished();

    const completedPage = new CompletePage (page);
    await completedPage.navigate("url");
    await completedPage.completePage();
})
import { Expect,Page,Locator, expect } from "@playwright/test";
export class LoginPage{
    page:Page;
    swaglabs:Locator;
    loginBuitton:Locator;
    username:Locator;
    password:Locator;
    login:Locator;

 constructor(page:Page){
    this.page=page;
    this.swaglabs=page.getByText("Swag Labs");
    this.loginBuitton=page.locator("#login-button");
    this.username=page.getByPlaceholder("Username");
    this.password=page.getByPlaceholder("Password");
    this.login=page.locator("#login-button");
 }   

//Reusable Methods
   async navigate(url:string){
    await this.page.goto("https://www.saucedemo.com/");
   }
   async loginMethod(username:string,password:string){
    expect(this.swaglabs).toBeVisible();
    const login=await this.loginBuitton.isEnabled()
    console.log(login);
    await this.username.fill(username);
    await this.password.fill(password);
    await this.login.click();
   }
}
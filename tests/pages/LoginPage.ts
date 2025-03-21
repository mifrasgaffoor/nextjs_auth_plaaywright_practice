import { Locator, Page } from "playwright";

export class LoginPage {
  readonly email: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;

  private page: Page;
  constructor(page: Page) {
    this.page = page;

    this.email = page.locator("//input[@id='email']");
    this.password = page.locator("//input[@id='password']");
    this.loginBtn = page.locator("//button[@type='submit']");
    }
    

    async login(email: string, password: string) {  
      await this.email.fill(email);
      await this.password.fill(password);
      await this.loginBtn.click();
    }

    async goto() {
      await this.page.goto("http://localhost:3000/login");
    }
}

import { Locator, Page } from "@playwright/test";

export class SimpleForm {
  readonly page: Page;
  readonly simpleFormDemoBtn: Locator;
  readonly enterMessageTextBox: Locator;
  readonly getCheckedValueBtn: Locator;
  readonly yourMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.simpleFormDemoBtn = page.getByText("Simple Form Demo");
    this.enterMessageTextBox = page.locator(
      '[placeholder="Please enter your Message"]'
    );
    this.getCheckedValueBtn = page.locator("#showInput");
    this.yourMessage = page.locator("p#message");
  }

  async navigateToSimpleFormDemoPage() {
    await this.page.goto("");
    await this.simpleFormDemoBtn.click();
  }

  async inputTextMessage(message: string) {
    await this.enterMessageTextBox.fill(message);
  }
}

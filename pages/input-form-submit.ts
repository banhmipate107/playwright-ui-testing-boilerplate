import { Locator, Page } from "@playwright/test";

export class InputFormSubmit {
  readonly page: Page;
  readonly inputFormBtn: Locator;
  readonly submitBtn: Locator;
  readonly nameField: Locator;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly companyField: Locator;
  readonly websiteField: Locator;
  readonly countryDropDown: Locator;
  readonly cityField: Locator;
  readonly address1Field: Locator;
  readonly address2Field: Locator;
  readonly stateField: Locator;
  readonly zipCodeField: Locator;
  readonly successfulMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputFormBtn = page.getByText("Input Form Submit");
    this.submitBtn = page.getByRole("button", { name: "Submit" });
    this.nameField = page.locator("#name");
    this.emailField = page.locator("#inputEmail4");
    this.passwordField = page.locator("#inputPassword4");
    this.companyField = page.locator("#company");
    this.websiteField = page.locator("#websitename");
    this.countryDropDown = page.locator('select[name="country"]');
    this.cityField = page.locator("#inputCity");
    this.address1Field = page.locator("#inputAddress1");
    this.address2Field = page.locator("#inputAddress2");
    this.stateField = page.locator("#inputState");
    this.zipCodeField = page.locator("#inputZip");
    this.successfulMessage = page.locator(".success-msg");
  }

  async navigateToInputFormSubmitPage() {
    await this.page.goto("");
    await this.inputFormBtn.click();
  }

  async inputValue(field: Locator, value: string) {
    await field.fill(value);
  }

  async selectCountry(countryCode: string) {
    await this.countryDropDown.selectOption({ value: countryCode });
  }

  async clickSubmitBtn() {
    await this.submitBtn.click();
  }
}

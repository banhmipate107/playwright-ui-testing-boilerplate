import { Locator, Page } from "@playwright/test";

export class UploadFile {
  readonly page: Page;
  readonly uploadFilePageBtn: Locator;
  readonly uploadFileBtn: Locator;
  readonly successfulUploadedMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uploadFilePageBtn = page.getByText("Upload File Demo");
    this.uploadFileBtn = page.locator('input[type="file"]');
    this.successfulUploadedMsg = page.locator("#error");
  }

  async navigateToUploadFilePage() {
    await this.page.goto("");
    await this.uploadFilePageBtn.click();
  }
}

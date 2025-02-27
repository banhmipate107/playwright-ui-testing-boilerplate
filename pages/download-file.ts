import { Locator, Page } from "@playwright/test";

export class DownloadFile {
  readonly page: Page;
  readonly downloadFilePageBtn: Locator;
  readonly downloadFileBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.downloadFilePageBtn = page.getByText("Download File Demo");
    this.downloadFileBtn = page.getByRole("button", { name: "Download File" });
  }

  async navigateToDownloadFilePage() {
    await this.page.goto("");
    await this.downloadFilePageBtn.click();
  }
}

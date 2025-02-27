import { expect, Locator, Page } from "@playwright/test";

export class DragDropSliders {
  readonly page: Page;
  readonly dragDropBtn: Locator;
  readonly default15Slider: Locator;
  readonly rangeValue: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dragDropBtn = page.getByText("Drag & Drop Sliders");
    this.default15Slider = page.locator('input[value="15"]');
    this.rangeValue = page.locator("#rangeSuccess");
  }

  async navigateToDragDropPage() {
    await this.page.goto("");
    await this.dragDropBtn.click();
    await expect(this.default15Slider).toBeVisible();
  }

  async slide(value: string) {
    await this.page.waitForTimeout(1000);
    await this.default15Slider.fill(value.toString());
    await this.page.waitForTimeout(1000);
  }
}

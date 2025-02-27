import { test, expect } from "@playwright/test";
import { SimpleForm } from "../pages/single-form";
import { DragDropSliders } from "../pages/drag-drop-sliders";
import { InputFormSubmit } from "../pages/input-form-submit";
import { userData } from "../mock-data/user-data";

test("simple form demo", async ({ page }) => {
  const textMessage = "Welcome to LambdaTest";
  const simpleForm = new SimpleForm(page);

  await test.step("access to Simple Form Demo page", async () => {
    await simpleForm.navigateToSimpleFormDemoPage();
  });

  await test.step("verify page url", async () => {
    await expect(page).toHaveURL(/.*simple-form-demo/);
  });

  await test.step("enter message to Enter message textbox", async () => {
    await simpleForm.enterMessageTextBox.click();
    await simpleForm.inputTextMessage(textMessage);
    await page.waitForTimeout(1000);
  });

  await test.step("click Get Checked Value button", async () => {
    await simpleForm.getCheckedValueBtn.click();
  });

  await test.step("verify whether the same text message is displayed in the right-hand panel under the “Your Message:” section.", async () => {
    await expect(simpleForm.yourMessage).toHaveText(textMessage);
  });
});

test("drag and drop demo", async ({ page }) => {
  const dragDropSliders = new DragDropSliders(page);

  await test.step("access to Drag & Drop Sliders", async () => {
    await dragDropSliders.navigateToDragDropPage();
  });

  await test.step("drag and drop the slider to 95", async () => {
    await dragDropSliders.slide("95");
  });

  await test.step("verify the output range value shows 95", async () => {
    await expect(dragDropSliders.rangeValue).toHaveText("95");
  });
});

test("input form submit", async ({ page }) => {
  const inputFormSubmit = new InputFormSubmit(page);

  await test.step("access to Input Form Submit", async () => {
    await inputFormSubmit.navigateToInputFormSubmitPage();
  });

  await test.step("click Submit button", async () => {
    await inputFormSubmit.clickSubmitBtn();
  });

  await test.step("verify the name field has required attribute", async () => {
    await expect(inputFormSubmit.nameField).toHaveAttribute("required");
  });

  await test.step("input values to all fields and submit", async () => {
    //input name
    await inputFormSubmit.inputValue(inputFormSubmit.nameField, userData.name);
    //input email
    await inputFormSubmit.inputValue(
      inputFormSubmit.emailField,
      userData.email
    );
    //input password
    await inputFormSubmit.inputValue(
      inputFormSubmit.passwordField,
      userData.password
    );
    //input company
    await inputFormSubmit.inputValue(
      inputFormSubmit.companyField,
      userData.company
    );
    //input website
    await inputFormSubmit.inputValue(
      inputFormSubmit.websiteField,
      userData.website
    );
    //select country
    await inputFormSubmit.selectCountry(userData.country);
    //input city
    await inputFormSubmit.inputValue(inputFormSubmit.cityField, userData.city);
    //input address1
    await inputFormSubmit.inputValue(
      inputFormSubmit.address1Field,
      userData.address1
    );
    //input address2
    await inputFormSubmit.inputValue(
      inputFormSubmit.address2Field,
      userData.address2
    );
    //input state
    await inputFormSubmit.inputValue(
      inputFormSubmit.stateField,
      userData.state
    );
    //input zip code
    await inputFormSubmit.inputValue(
      inputFormSubmit.zipCodeField,
      userData.zipcode
    );
    //click submit button
    await inputFormSubmit.submitBtn.click();
  });

  await test.step("verify there is a message appearing", async () => {
    await expect(inputFormSubmit.successfulMessage).toBeVisible();
  });
});

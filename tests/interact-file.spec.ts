import { test, expect } from "@playwright/test";
import { DownloadFile } from "../pages/download-file";
import { UploadFile } from "../pages/upload-file";

test("download file", async ({ page }) => {
  const downloadFile = new DownloadFile(page);

  await test.step("access to download file page", async () => {
    await downloadFile.navigateToDownloadFilePage();
  });

  await test.step("download file", async () => {
    const [download] = await Promise.all([
      page.waitForEvent("download"),
      downloadFile.downloadFileBtn.click(),
    ]);
    const fileName = download.suggestedFilename();
    await download.saveAs(fileName);
  });
});

test("upload file", async ({ page }) => {
  const uploadFile = new UploadFile(page);

  await test.step("access to upload file page", async () => {
    await uploadFile.navigateToUploadFilePage();
  });

  await test.step("select file and upload", async () => {
    const fileChooserPromise = page.waitForEvent("filechooser");
    await uploadFile.uploadFileBtn.click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles("mock-data/path.jpeg");
  });

  await test.step("verify there is a successful message after uploading", async () => {
    await expect(uploadFile.successfulUploadedMsg).toHaveText(
      "File Successfully Uploaded"
    );
    await expect(uploadFile.successfulUploadedMsg).toHaveAttribute(
      "style",
      "color: green;"
    );
  });
});

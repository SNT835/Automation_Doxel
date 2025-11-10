import {test, expect} from "@playwright/test";

test("login to Doxel", async({page})=>{

const userEmail = "testerdoxel2@gmail.com";
const userPassword = "Doxel567@";
const EmailInput = page.locator('[name="email"]');
const Continue = page.getByRole("button",{name:"Continue"});
const passwordInput = page.locator('[name="password"]');

await page.goto("https://app.doxel.ai");
await page.waitForLoadState();
await EmailInput.waitFor();
await page.waitForLoadState();
await EmailInput.fill(userEmail);
await Continue.click();
await page.getByRole("link", {name:" Sign in with password "}).click();
await passwordInput.fill(userPassword);
await Continue.click();
const activeProjects = await page.getByText('Active Projects', { exact: true });
await expect(activeProjects).toBeVisible();
console.log(await page.locator(".bg-surface-100").first().textContent()); 

})









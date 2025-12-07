import "dotenv/config";
import textBox from "../pageobject/textBox.page";
import elements from "../pageobject/elemets.page.js";

const name = process.env.NAME;
const email = process.env.EMAIL;
const currentAddress = process.env.CURRENT_ADDRESS;
const permanentAddress = process.env.PERMANENT_ADDRESS;

describe("The practice task 1", () => {
  it("Input text", async () => {
    await browser.url("https://demoqa.com/text-box");

    await textBox.inputText(name, email, currentAddress, permanentAddress);

    await textBox.clickOnSubmit();

    const outputName = await $("#name").getText();
    const outputEmail = await $("#email").getText();
    const outputCurrentAddress = await $("p#currentAddress").getText();
    const outputPermanentAddress = await $("p#permanentAddress").getText();

    expect(outputName).toBe(`Name:${name}`);
    expect(outputEmail).toBe(`Email:${email}`);
    expect(outputCurrentAddress).toBe(`Current Address :${currentAddress}`);
    expect(outputPermanentAddress).toBe(`Permananet Address :${permanentAddress}`);
  });

  it("CheckBox Task", async () => {
    await elements.clickOnRequiredCheckBox("Check Box");

    await elements.clickOnCollapseButton();

    await browser.pause(1000);

    await elements.clickOnRequiredCollapseButton("Documents");

    await elements.clickOnCheckBox();

    const workSpaceCheckBox = await elements.activeCheckBox("WorkSpace");
    
    await expect(workSpaceCheckBox).toHaveAttribute("class", "rct-icon rct-icon-check");
  });
});

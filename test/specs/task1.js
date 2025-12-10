import "dotenv/config";
import textBox from "../pageobject/textBox.page";
import elements from "../pageobject/elemets.page.js";
import webTables from "../pageobject/webTables.page.js";

const name = process.env.NAME;
const lastName = process.env.LAST_NAME;
const email = process.env.EMAIL;
const age = process.env.AGE;
const salary = process.env.SALARY;
const department = process.env.DEPARTMENT;
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
    expect(outputPermanentAddress).toBe(
      `Permananet Address :${permanentAddress}`
    );
  });

  it("CheckBox Task", async () => {
    await elements.clickOnRequiredCheckBox("Check Box");

    await elements.clickOnCollapseButton();

    await elements.clickOnRequiredCollapseButton("Documents");

    await elements.clickOnCheckBox();

    const workSpaceCheckBox = await elements.activeCheckBox("WorkSpace");

    await expect(workSpaceCheckBox).toHaveAttribute(
      "class",
      "rct-icon rct-icon-check"
    );
  });

  it("WebTables task", async () => {
    await elements.clickOnRequiredCheckBox("Web Tables");

    await webTables.clickOnAddButton();

    await webTables.inputUserData(
      name,
      lastName,
      email,
      age,
      salary,
      department
    );

    await webTables.clickOnSubmitButton();

    const row = await webTables.getUserRowByEmail(email);
    const rowText = await row.getText();
    expect(rowText).toContain(name);
    expect(rowText).toContain(lastName);
    expect(rowText).toContain(email);
    expect(rowText).toContain(age);
    expect(rowText).toContain(salary);
    expect(rowText).toContain(department);

    const removedUser = await webTables.removeUserByEmail(email);

    expect(await removedUser).toBe(false);
  });

  // The new tests below demonstrate different approache to get and validate multiple fields
  it("Input text - with map() and validation", async () => {
    await browser.url("https://demoqa.com/text-box");

    await textBox.inputText(name, email, currentAddress, permanentAddress);

    await textBox.clickOnSubmit();

    // Array of objects with selectors and expected values
    const validations = [
      { selector: "#name", expected: `Name:${name}` },
      { selector: "#email", expected: `Email:${email}` },
      {
        selector: "p#currentAddress",
        expected: `Current Address :${currentAddress}`,
      },
      {
        selector: "p#permanentAddress",
        expected: `Permananet Address :${permanentAddress}`,
      },
    ];

    // The method map() to validate all fields
    const results = await Promise.all(
      validations.map(async ({ selector, expected }) => {
        const actual = await $(selector).getText();
        return { selector, actual, expected, isValid: actual === expected };
      })
    );

    // Check all results
    results.forEach(({ actual, expected }) => {
      expect(actual).toBe(expected);
    });
  });
});

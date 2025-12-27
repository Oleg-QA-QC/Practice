import "dotenv/config";
import textBox from "../pageobject/textBox.page";
import elements from "../pageobject/elements.page.js";
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
  it("should submit text box form and display correct output", async () => {
    await browser.url("https://demoqa.com/text-box");

    await textBox.inputText(name, email, currentAddress, permanentAddress);

    await textBox.clickOnSubmit();

    const output = await textBox.getOutputValues();

    expect(output.name).toBe(`Name:${name}`);
    expect(output.email).toBe(`Email:${email}`);
    expect(output.currentAddress).toBe(`Current Address :${currentAddress}`);
    expect(output.permanentAddress).toBe(
      `Permananet Address :${permanentAddress}`
    );
  });

  it("should select 'Workspace' checkbox and verify state", async () => {
    await elements.clickOnLeftMenuItem("Check Box");

    await elements.clickOnCollapseButton();

    await elements.clickOnRequiredCollapseButton("Documents");

    await elements.clickOnCheckBox();

    const workSpaceCheckBox = await elements.activeCheckBox("WorkSpace");

    await expect(workSpaceCheckBox).toHaveAttribute(
      "class",
      "rct-icon rct-icon-check"
    );
  });

  it("should add and remove user in web table", async () => {
    await elements.clickOnLeftMenuItem("Web Tables");

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

    expect(removedUser).toBe(false);
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

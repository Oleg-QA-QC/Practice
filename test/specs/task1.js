import textBox from "../pageobject/textBox.page";

const name = "John Doe";
const email = "john@doe.com";
const currentAddress = "123 Main St, Springfield";
const permanentAddress = "456 Elm St, Shelbyville";

describe("The practice task 1", () => {
  it("Input text", async () => {
    await browser.url("https://demoqa.com/text-box");

    await textBox.inputText(name, email, currentAddress, permanentAddress);

    await textBox.clickSubmit();

    const outputName = await $("#name").getText();
    const outputEmail = await $("#email").getText();
    const outputCurrentAddress = await $("p#currentAddress").getText();
    const outputPermanentAddress = await $("p#permanentAddress").getText();

    expect(outputName).toBe(`Name:${name}`);
    expect(outputEmail).toBe(`Email:${email}`);
    expect(outputCurrentAddress).toBe(currentAddress);
    expect(outputPermanentAddress).toBe(permanentAddress);
  });

  it("CheckBox Task", async () => {
    await browser.url("https://demoqa.com/checkbox");
  });
});

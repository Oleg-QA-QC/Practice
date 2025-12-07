class Actions {
async clickOnElement(element) {
    await element.waitForExist();
    await element.scrollIntoView();
    await element.waitForClickable();

    await element.click();
  }
}

export default new Actions();
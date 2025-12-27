import actions from "./actions.page.js";

class Elements {
  get collapseButton() {
    return $('//button[@class="rct-collapse rct-collapse-btn"]');
  }

  get workSpaceCheckBox() {
    return $(
      "//label[@for='tree-node-workspace']//span[@class='rct-checkbox']"
    );
  }

  async clickOnLeftMenuItem(checkBoxTitle) {
   const checkBox = await $(
     `//span[text()='${checkBoxTitle}']//ancestor::li`
   );

    await actions.clickOnElement(checkBox);
  }

  async clickOnCollapseButton() {
    await actions.clickOnElement(this.collapseButton);
  }

  async clickOnRequiredCollapseButton(btn) {
    const collapseButton = await $(
      `//span[text()='${btn}']//ancestor::li[@class='rct-node rct-node-parent rct-node-collapsed']//button`
    );

    await actions.clickOnElement(collapseButton);
  }

  async activeCheckBox(checkBoxName) {
    const checkBox = await $(
      `//span[text()='${checkBoxName}']/preceding-sibling::span[@class='rct-checkbox']//*[local-name()='svg']`
    );

    return checkBox;
  }

  async clickOnCheckBox() {
    await actions.clickOnElement(this.workSpaceCheckBox);
  }
}

export default new Elements();

import actions from "./actions.page.js";

class WebTables {
  get addButton() {
    return $("#addNewRecordButton");
  }

  get firstNameInput() {
    return $("#firstName");
  }

  get lastNameInput() {
    return $("#lastName");
  }

  get emailInput() {
    return $("#userEmail");
  }

  get ageInput() {
    return $("#age");
  }

  get salaryInput() {
    return $("#salary");
  }

  get departmentInput() {
    return $("#department");
  }

  get submitButton() {
    return $("#submit");
  }

  get removeButton() {
    return $("//span[@title='Delete']");
  }

  async clickOnAddButton() {
    await actions.clickOnElement(this.addButton);
  }

  async inputUserData(firstName, lastName, email, age, salary, department) {
    await this.firstNameInput.setValue(firstName);
    await this.lastNameInput.setValue(lastName);
    await this.emailInput.setValue(email);
    await this.ageInput.setValue(age);
    await this.salaryInput.setValue(salary);
    await this.departmentInput.setValue(department);
  }

  async clickOnSubmitButton() {
    await actions.clickOnElement(this.submitButton);
  }

  async getUserRowByEmail(email) {
    return $(
      `//div[@role='gridcell'][contains(text(), '${email}')]//ancestor::div[@role='row']`
    );
  }

  async removeUserByEmail(email) {
    const row = await this.getUserRowByEmail(email);
    const deleteButton = await row.$("//span[@title='Delete']");
    await deleteButton.click();

    const isExisting = await row.isExisting();
    return isExisting;
  }
}

export default new WebTables();

import actions from "./actions.page.js";

class TextBox {
  get userName() {
    return $("#userName");
  }

  get email() {
    return $("#userEmail");
  }

  get currentAddress() {
    return $("#currentAddress");
  }

  get permanentAddress() {
    return $("#permanentAddress");
  }

  get submitButton() {
    return $("#submit");
  }

  async inputText(name, email, currentAddress, permanentAddress) {
    await this.userName.setValue(name);
    await this.email.setValue(email);
    await this.currentAddress.setValue(currentAddress);
    await this.permanentAddress.setValue(permanentAddress);
  }

  async clickOnSubmit() {
    await actions.clickOnElement(this.submitButton);
  }
}

export default new TextBox();

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

  get outputName() {
    return $("#name");
  }

  get outputEmail() {
    return $("#email");
  }

  get outputCurrentAddress() {
    return $("p#currentAddress");
  }
  
  get outputPermanentAddress() {
    return $("p#permanentAddress");
  }

  async inputText(name, email, currentAddress, permanentAddress) {
    await this.userName.setValue(name);
    await this.email.setValue(email);
    await this.currentAddress.setValue(currentAddress);
    await this.permanentAddress.setValue(permanentAddress);
  }

  async getOutputValues() {
    return {
      name: await this.outputName.getText(),
      email: await this.outputEmail.getText(),
      currentAddress: await this.outputCurrentAddress.getText(),
      permanentAddress: await this.outputPermanentAddress.getText(),
    };
  }

  async clickOnSubmit() {
    await actions.clickOnElement(this.submitButton);
  }
}

export default new TextBox();

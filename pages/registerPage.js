const { I } = inject();

module.exports= {
    field: {
        fieldEmail :{xpath:'//input[contains(@id,"email")]'},
        fieldMobilePhone :{xpath:'//input[contains(@id,"mobilePhone")]'},
        fieldPassword :{xpath:'//input[contains(@id,"password")]'},
        fieldRepeatPassword :{xpath:'//input[contains(@id,"confirmPassword")]'},
        fieldFirstName :{xpath:'//input[contains(@id,"firstName")]'},
        fieldLastName :{xpath:'//input[contains(@id,"lastName")]'},
        fieldCity :{xpath:'//input[contains(@id,"cityAndProvince")]'}
    },
    button: {
        buttonRegister :{xpath:'//button[@data-button-name="register-new"]'}
        },
    text: {
        errorTextEmailRequiered: { xpath:'(//div[@class="m-t-4 error_rz3sn"][contains(.,"Input wajib diisi")])[2]'}
    },

    // methods

    filledEmail(email) {
        I.fillField(this.field.fieldEmail, email);
        I.wait(5);
    },
    filledPhoneNumber(phone){
        I.fillField(this.field.fieldMobilePhone, phone);
        I.wait(5);
    },
    filledPaswword(password){
        I.fillField(this.field.fieldPassword, password);
        I.wait(5);
    },
    filledRepeatPassword(repeatPassword){
        I.fillField(this.field.fieldRepeatPassword, repeatPassword);
        I.wait(5);
        I.scrollTo(this.button.buttonRegister);
    },
    filledFirstName(firstName){
        I.fillField(this.field.fieldFirstName, firstName);
        I.wait(5);
    },
    filledLastName(lastName){
        I.fillField(this.field.fieldLastName, lastName);
        I.wait(5);
    },
    filledCountry(city){
        I.fillField(this.field.fieldCity, city);
        I.wait(5);
    }
    // nullFill(){
        // var message = "Input wajib diisi";
        // I.see(message, this.text.errorTextEmailRequiered);
    // }

}
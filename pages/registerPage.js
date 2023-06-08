
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
        errorTextEmailRequiered: { xpath:'//div[@class="m-t-4 error_rz3sn"][contains(.,"Input wajib diisi")]'},
        errorTextPhoneNumberRequiered: { xpath:'//input[@class="field_MOE4W field--has-error_oniqB"]'},
        errorTextCityRequiered: { xpath:'//div[@class="m-t-4 error_rz3sn"][contains(.,"Kabupaten/Kota tidak tersedia di dalam pilihan yang ada")]'},
        errorTextPasswordDontMatch: { xpath:'//div[@class="m-t-4 error_rz3sn"][contains(.,"Kata Sandi tidak cocok")]'},
        textFieldVerifikasi :{xpath:'//h1[contains(.,"Pilih Metode Verifikasi")]'}
    },

    // methods

    filledEmail(email) {
        I.click(this.field.fieldEmail);
        I.fillField(this.field.fieldEmail, email);
        I.wait(2);
    },
    filledPhoneNumber(phone){
        I.click(this.field.fieldMobilePhone);
        I.fillField(this.field.fieldMobilePhone, phone);
        I.wait(2);
    },
    filledPaswword(password){
        I.click(this.field.fieldPassword);
        I.fillField(this.field.fieldPassword, password);
        I.wait(2);
    },
    filledRepeatPassword(repeatPassword){
        I.click(this.field.fieldRepeatPassword);
        I.fillField(this.field.fieldRepeatPassword, repeatPassword);
        I.wait(2);
        I.scrollTo(this.button.buttonRegister);
    },
    filledFirstName(firstName){
        I.click(this.field.fieldFirstName);
        I.fillField(this.field.fieldFirstName, firstName);
        I.wait(2);
    },
    filledLastName(lastName){
        I.click(this.field.fieldLastName);
        I.fillField(this.field.fieldLastName, lastName);
        I.wait(2);
    },
    filledCountry(city){
        I.click(this.field.fieldCity);
        I.fillField(this.field.fieldCity, city);
        I.wait(2);
    },
    // nullFill(){
        // var message = "Input wajib diisi";
        // I.see(message, this.text.errorTextEmailRequiered);
    // }
    clickButton(){
        I.seeElement(this.button.buttonRegister);
        I.forceClick(this.button.buttonRegister);
        I.wait(2);
    }

}
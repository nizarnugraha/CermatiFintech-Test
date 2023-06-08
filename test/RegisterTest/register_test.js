

Feature('Register Account')

Scenario('Validate Error message empty email', ({I, registerPage}) => {
  I.amOnPage(process.env.HOST_CERMATI);
  registerPage.filledPhoneNumber("081296052440");
  registerPage.filledPaswword("Juni072023");
  registerPage.filledRepeatPassword("Juni072023");
  registerPage.filledFirstName("Nizar");
  registerPage.filledLastName("Nugraha");
  registerPage.filledCountry("KOTA JAKARTA SELATAN");
  I.pressKey('Enter');
  I.wait(3);
  registerPage.clickButton();
  I.wait(3);
  I.scrollTo(registerPage.field.fieldEmail);
  I.wait(3);
  I.seeElement(registerPage.text.errorTextEmailRequiered);
});

Scenario('Validate Error message empty phone number', ({I, registerPage}) => {
  I.amOnPage(process.env.HOST_CERMATI);
  registerPage.filledEmail("nizarnugraha9@yopmail.com");
  registerPage.filledPaswword("Juni072023");
  registerPage.filledRepeatPassword("Juni072023");
  registerPage.filledFirstName("Nizar");
  registerPage.filledLastName("Nugraha");
  registerPage.filledCountry("KOTA JAKARTA SELATAN");
  I.pressKey('Enter');
  I.wait(3);
  registerPage.clickButton();
  I.wait(3);
  I.scrollTo(registerPage.field.fieldEmail);
  I.wait(3);
  I.seeElement(registerPage.text.errorTextPhoneNumberRequiered);
  I.wait(5);
});

Scenario('Validate Error message password dont match', ({I, registerPage}) => {
  I.amOnPage(process.env.HOST_CERMATI);
  registerPage.filledEmail("nizarnugraha9@yopmail.com");
  registerPage.filledPhoneNumber("081296052440");
  registerPage.filledPaswword("Juni072023");
  registerPage.filledRepeatPassword("Juni072022");
  registerPage.filledFirstName("Nizar");
  I.wait(3);
  I.seeElement(registerPage.text.errorTextPasswordDontMatch);
  I.wait(5);
});

Scenario('Validate Error message City', ({I, registerPage}) => {
  I.amOnPage(process.env.HOST_CERMATI);
  registerPage.filledEmail("nizarnugraha9@yopmail.com");
  registerPage.filledPhoneNumber("081296052440");
  registerPage.filledPaswword("Juni072023");
  registerPage.filledRepeatPassword("Juni072023");
  registerPage.filledFirstName("Nizar");
  registerPage.filledLastName("Nugraha");
  registerPage.filledCountry("TEGULLL");
  registerPage.clickButton();
  I.wait(3);
  I.seeElement(registerPage.text.errorTextCityRequiered);
});


Scenario('Register Successfully', ({I, registerPage}) => {
    I.amOnPage(process.env.HOST_CERMATI);
    registerPage.filledEmail("nizarnugraha9@yopmail.com");
    registerPage.filledPhoneNumber("081296052440");
    registerPage.filledPaswword("Juni072023");
    registerPage.filledRepeatPassword("Juni072023");
    registerPage.filledFirstName("Nizar");
    registerPage.filledLastName("Nugraha");
    registerPage.filledCountry("KOTA JAKARTA SELATAN");
    I.pressKey('Enter');
    I.wait(3);
    registerPage.clickButton();
    I.wait(5);
    I.seeElement(registerPage.text.textFieldVerifikasi);
  });
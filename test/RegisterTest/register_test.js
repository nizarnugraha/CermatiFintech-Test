// const productJaketURL = 'https://demo.vercel.store/product/lightweight-jacket';
// const checkoutURL = 'https://acmedemo.mybigcommerce.com/checkout';
// const orderConfirmationURL = 'https://acmedemo.mybigcommerce.com/checkout/order-confirmation';

Feature('Register Account')

// Scenario('Validate Error message empty email', ({I, registerPage}) => {
  // I.amOnPage(process.env.HOST_CERMATI);
  // registerPage.filledPhoneNumber("081296052440");
  // registerPage.filledPaswword("Juni072023");
  // registerPage.filledRepeatPassword("Juni072023");
  // registerPage.filledFirstName("Nizar");
  // registerPage.filledLastName("Nugraha");
  // registerPage.filledCountry("KOTA JAKARTA SELATAN");
  // I.pressKey('Enter');
  // I.click(registerPage.button.buttonRegister);
  // I.wait(3);
  // I.scrollTo(registerPage.field.fieldEmail);
  // I.wait(3);
  // I.seeElement(registerPage.text.errorTextEmailRequiered);
// });

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
  I.click(registerPage.button.buttonRegister);
  I.wait(3);
  I.scrollTo(registerPage.field.fieldEmail);
  I.wait(3);
  I.seeElement(registerPage.text.errorTextEmailRequiered);
});

// Scenario('Validate Error message empty password', ({I, registerPage}) => {
//   I.amOnPage(process.env.HOST_CERMATI);
//   registerPage.filledEmail("nizarnugraha9@yopmail.com");
//   registerPage.filledPhoneNumber("081296052440");
//   registerPage.filledRepeatPassword("Juni072023");
//   registerPage.filledFirstName("Nizar");
//   registerPage.filledLastName("Nugraha");
//   registerPage.filledCountry("KOTA JAKARTA SELATAN");
//   I.pressKey('Enter');
//   I.wait(3);
// });


// Scenario('Register Successfully', ({I, registerPage}) => {
//     I.amOnPage(process.env.HOST_CERMATI);
//     registerPage.filledEmail("nizarnugraha9@yopmail.com");
//     registerPage.filledPhoneNumber("081296052440");
//     registerPage.filledPaswword("Juni072023");
//     registerPage.filledRepeatPassword("Juni072023");
//     registerPage.filledFirstName("Nizar");
//     registerPage.filledLastName("Nugraha");
//     registerPage.filledCountry("KOTA JAKARTA SELATAN");
//     I.pressKey('Enter');
//     I.wait(3);
//   });
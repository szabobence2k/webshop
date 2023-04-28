
describe('shopping test', function() {
  /*
  it('registrate and login', function() {
    browser.waitForAngular();
    browser.get('http://localhost:4200/login');
    browser.waitForAngularEnabled(false);
    browser.sleep(1000);
    browser.element(by.name('userName')).sendKeys('Bence');
    browser.sleep(500);
    browser.element(by.name('email')).sendKeys('valami@gmail.com');
    browser.sleep(500);
    browser.element(by.name('password')).sendKeys('12345678');
    browser.sleep(500);
    browser.element(by.name('registrationButton')).click();
    browser.sleep(500);
    browser.element(by.cssContainingText('span', 'Bejelentkezés')).click();
    browser.element(by.css('label[name="loginLabel"]')).click();
    browser.sleep(1000);
    browser.element(by.name('loginUserName')).sendKeys('Bence');
    browser.sleep(500);
    browser.element(by.name('loginPassword')).sendKeys('12345678');
    browser.sleep(500);
    browser.element(by.name('login')).click();
  });*/

  it('shop', function() {
    browser.waitForAngular();
    browser.get('http://localhost:4200/home');
    browser.waitForAngularEnabled(false);
    browser.sleep(1000);
    browser.element(by.css('mat-icon[name="addToCartIcon"]')).click();
    browser.sleep(1000);
    browser.element(by.css('mat-icon[name="shoppingCart"]')).click();
    browser.sleep(1000);
    browser.element(by.css('mat-icon[name="Cart"]')).click();
    browser.sleep(1000);
  });

  it('shop', function() {
    browser.waitForAngular();
    browser.get('http://localhost:4200/cart');
    browser.waitForAngularEnabled(false);
    browser.sleep(1000);
    browser.element(by.cssContainingText('span', 'Tovább a fizetéshez')).click();
    browser.sleep(10000);

  });

 /* it('should create instrumenttester', () => {
    browser.waitForAngular();
    browser.get('http://localhost:4200/#/instrumentmanagement/instruments');
    browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))), 25000);
    browser.sleep(1000);  
    browser.element(by.id('addInstrument')).click();
    browser.sleep(1500);
    let laborNumber = page.getRandomString(10);
    let serialNumber = page.getRandomString(5);
    browser.element(by.css('input[formcontrolName=laborNumber]')).sendKeys(laborNumber);
    browser.element(by.css('input[formcontrolName=serialNumber]')).sendKeys(serialNumber);
    browser.element(by.css('mat-select[formcontrolName=laborPremisesId]')).click();
    browser.sleep(1000);
    browser.element(by.css('mat-option:nth-child(1)')).click();
    browser.sleep(1000);
    browser.element(by.css('mat-checkbox[formcontrolName=mobileInstrument]')).click();
    browser.sleep(1000);
    browser.element(by.css('mat-select[formControlName=workstationId]')).click();
    browser.sleep(1000);
    browser.element(by.css('mat-option:nth-child(2)')).click();
    browser.sleep(1000);
    browser.element(by.css('mat-select[formControlName=firstInstrumentUserId]')).click();
    browser.sleep(1000);
    browser.element(by.cssContainingText('span', ' Szabó Bence ')).click();
    browser.sleep(1000);
    browser.element(by.css('mat-select[formControlName=instrumentStatusID]')).click();
    browser.sleep(1000);
    browser.element(by.cssContainingText('span', ' Használatban ')).click();
    browser.sleep(1000);
    browser.element(by.css('mat-select[formControlName=instrumentTypeId]')).click();
    browser.sleep(1000);
    browser.element(by.css('mat-option:nth-child(1)')).click();
    browser.sleep(1000);
    browser.element(by.css('mat-select[formControlName=measurementTypeId]')).click();
    browser.sleep(1000);
    browser.element(by.cssContainingText('span', ' Hosszmérés ')).click();
    browser.sleep(1000);
    browser.element(by.css('mat-select[formControlName=quantityUnit]')).click();
    browser.sleep(1000);
    browser.element(by.css('mat-option:nth-child(3)')).click();
    browser.sleep(1000);
    browser.element(by.id('saveInstrument')).click();
    browser.sleep(1000);
    //kalibracio hozzaadasa
    browser.element.all((by.css('tbody tr'))).last().element(by.css('td button')).click();
    browser.element(by.cssContainingText('span', 'Kalibráció hozzáadása')).click();
    let calibrationNumber = page.getRandomString(5);
    browser.element(by.css('input[formcontrolName=calibrationVoucherNumber]')).sendKeys(calibrationNumber);
    browser.element(by.css('input[formcontrolName=calibrationTime]')).sendKeys('2022.03.22.');
    browser.element(by.css('input[formcontrolName=calibrationPermission]')).sendKeys('2100.06.17.');
    browser.element(by.css('mat-select[formcontrolName=calibrationType]')).click();
    browser.sleep(1000);
    browser.element(by.css('mat-option:nth-child(2)')).click();
    browser.sleep(1000);
    browser.element(by.cssContainingText('span', 'Mentés')).click();
  });

  it('should create form', () => {
    browser.waitForAngular();
    browser.get('http://localhost:4200/#/form/forms');
    browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))), 25000);
    browser.sleep(2000);
    let testname = page.getRandomString(5);
    browser.element(by.id('addForm')).click();
    browser.sleep(1500);
    browser.element(by.id('titleLabel')).sendKeys(testname);
    browser.element(by.id('descriptionLabel')).sendKeys(testname);
    //browser.element(by.cssContainingText('span', 'Címke')).sendKeys('e2e');
    //browser.element(by.cssContainingText('span', 'Címke')).sendKeys(Key.ENTER);
    browser.element(by.id('addFormField')).click();
    browser.sleep(1000);
    browser.element(by.cssContainingText('span', 'Új mező')).click();
    browser.element(by.cssContainingText('span',' Mező beállítások ')).click();
    browser.sleep(1000);
    browser.element(by.cssContainingText('span', ' Mérési mező ')).click();
    browser.element(by.id('measurementTypeIdLabel')).click();
    browser.sleep(1000);
    browser.element(by.cssContainingText('span',' Hosszmérés ')).click();
    browser.element(by.id('unitTypeLabel')).click();
    browser.sleep(1000);
    browser.element(by.cssContainingText('span', ' Centiméter ')).click();
    browser.sleep(1000);
    browser.element(by.css('app-save-fab eco-fab-speed-dial button')).click();
    browser.sleep(1000);
    browser.element(by.cssContainingText('span', 'Mentés')).click();
    browser.sleep(3000);
 });

  it('should fill form', () => {
    browser.waitForAngular();
    browser.get('http://localhost:4200/#/form/forms');
    browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))), 35000);
    browser.sleep(2000);
    browser.element.all((by.css('tbody tr'))).last().element(by.css('td button')).click();
    browser.sleep(1500);
    browser.element(by.cssContainingText('span', 'Kitöltő sablonok')).click();
    browser.sleep(1000);
    browser.element(by.id('addFormLayout')).click();
    browser.sleep(2000);
    browser.element(by.css('input[formcontrolname=name]')).sendKeys('Proba');
    browser.element(by.css('mat-select[formcontrolname=formLayoutType]')).click();
    browser.sleep(1000);
    browser.element(by.css('mat-option:nth-child(1)')).click();
    browser.sleep(1000);
    //drag and drop
    
    browser.actions().dragAndDrop(element(by.cssContainingText('span', 'Új mező')), element(by.css('gridster:nth-child(1)'))).perform();

    browser.element(by.css('app-save-fab eco-fab-speed-dial button')).click();
    browser.sleep(1000);
    browser.element(by.cssContainingText('span', 'Mentés és próba kitöltés')).click();
    browser.sleep(3000);
    browser.element(by.id('startMeasuringButton')).click();
    browser.sleep(5000);
    browser.element(by.css('input[formcontrolname=manualMeasurementValue]')).sendKeys('100');
    browser.element(by.cssContainingText('span', ' Érték mentése ')).click();
    
  });*/

});
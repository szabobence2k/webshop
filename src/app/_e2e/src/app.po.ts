import { browser, by, element, Key } from 'protractor';


const EC = browser.ExpectedConditions;
export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }
  getUsername() {
    return element(by.css('input[formControlName=username]'));
  }
  getPassword() {
    return element(by.css('input[formControlName=password]'));
  }
  getDatabase() {
    return element(by.tagName('mat-select'));
  }
  login() {
    browser.driver.manage().window().maximize();
    this.navigateTo();
    this.getUsername().sendKeys('BenceTester');
    this.getPassword().sendKeys('Pentatrade1');
    this.getDatabase().click();
    element(by.cssContainingText('mat-option .mat-option-text', 'DEV_Test')).click();
    this.getPassword().sendKeys(Key.ENTER);
  }
  editWorkFlow() {
    browser.get('http://localhost:4200/#/workflow/list/workflowdefinitions');
    browser.navigate().refresh();
    browser.waitForAngularEnabled(false);
    browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))), 10000);
    browser.sleep(3000);
    browser.element.all((by.css('tbody tr'))).last().element(by.css('td button')).click();
    browser.sleep(1000);
    browser.element(by.css('.mat-menu-content div:nth-child(3) button')).click();
    browser.sleep(1500);
  }

  getRandomString(length: number) {
    var string = '';
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' //Include numbers if you want
            for (let i = 0; i < length; i++) {
                string += letters.charAt(Math.floor(Math.random() * letters.length));
            }
            return string;
        }

}

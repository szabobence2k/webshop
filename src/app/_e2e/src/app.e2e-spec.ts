import { AppPage } from './app.po';
import { browser, by, element, Key, logging, until } from 'protractor';
import { BrowserStack } from 'protractor/built/driverProviders';
import { protractor, Ptor } from 'protractor/built/ptor';

let page: AppPage;
const EC=browser.ExpectedConditions;
beforeEach(() => {
  page = new AppPage();
});



/*  describe('rosszak tesztelese', ()=>{
  //ünnepnap hozzáadása, csak akkor lehet ha a csuszkára rányomunk kétszer
  it('should create excluded day',()=>{
    browser.waitForAngular();
    browser.get('http://localhost:4200/#/work/excludeddays');
    browser.waitForAngularEnabled(false);
    browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
    browser.element(by.id('addExcludedDay')).click();
    browser.element(by.css('.mat-datepicker-input')).sendKeys("2020.12.24.");
    browser.element(by.id('saveExcludedDay')).click();
    browser.driver.wait(EC.presenceOf(element(by.css('mat-spinner'))),16000);
  });

  //ünnepnap törlése
  it('should delete excluded day',()=>{
    browser.waitForAngular();
    browser.get('http://localhost:4200/#/work/excludeddays');
    browser.waitForAngularEnabled(false);
    browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
    browser.sleep(8000);
    browser.element.all((by.css('mat-checkbox'))).last().click();
    //browser.driver.wait(EC.presenceOf(element(by.id('deletepricelist'))),5000);
    browser.element(by.id('deleteExcludedDay')).click();
    browser.waitForAngular();
  });  
}) ; */

 describe('torzsadatok', ()=>{

  describe('create', ()=>{

    //árlista készítése
    it('should create pricelist',()=>{
      page.login();
      browser.driver.wait(EC.presenceOf(element(by.css('mat-toolbar'))),10000);
      browser.get('http://localhost:4200/#/work/pricelists');
      browser.waitForAngularEnabled(false);
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.element(by.id('addpricelist')).click();
      browser.element(by.css('input[formControlName=name]')).sendKeys("asd");
      browser.element(by.css('input[formControlName=startOfValidity]')).sendKeys("2020.12.05.");
      browser.element(by.id('savepricelist')).click();
      browser.sleep(500);
    });

    //árlista item készítése
    it('should create pricelistitem',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/pricelists');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.element.all(by.css('button')).last().click();
      browser.sleep(500);
      browser.element(by.css(".mat-menu-content div:nth-child(3) button")).click();
      browser.sleep(2000);
      browser.element(by.id('addpricelistitem')).click();
      browser.element(by.css('input[formControlName=price]')).sendKeys("2000");
      browser.element(by.css('mat-select[formControlName=serviceId]')).click();
      browser.sleep(500);
      browser.element(by.css('mat-option')).click();
      browser.sleep(500);
      browser.element(by.id('savepricelistitem')).click();
      browser.sleep(500);
    });

    //partner hozzáadása
    it('should create partner',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/partners');
      browser.driver.wait(EC.presenceOf(element(by.id('addpartner'))),25000);
      browser.element(by.id('addpartner')).click();
      browser.element(by.css('input[formControlName=companyName]')).sendKeys("comptest");
      browser.element(by.css('input[formControlName=countryCode]')).sendKeys("HU");
      browser.element(by.css('input[formControlName=postCode]')).sendKeys("1234");
      browser.element(by.css('input[formControlName=city]')).sendKeys("gyor");
      browser.element(by.css('input[formControlName=street]')).sendKeys("petofi");
      browser.element(by.css('input[formControlName=streetDetails]')).sendKeys("asdasd");
      browser.element(by.id('contact_mobile_number')).sendKeys("201231234");
      browser.element(by.css('input[formControlName=bankAccountNumber]')).sendKeys("574385823");
      browser.element(by.css('input[formControlName=emailAddress]')).sendKeys("test@test.hu");
      browser.element(by.css('input[formControlName=taxNumber]')).sendKeys("11925323-1-13");
      browser.sleep(100);
      browser.element(by.id('savepartner')).click();
      browser.sleep(500);
    });

    //szolgáltatástípus hozzáadása
    it('should create service type',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/servicetypes');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.element(by.id('addServiceType')).click();
      browser.element(by.css('input[formcontrolName=name]')).sendKeys("testService");
      browser.element(by.id('saveServiceType')).click();
      browser.sleep(500);
    });

    //szolgáltatás készítése
    it('should create service',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/services');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.element(by.id('addService')).click();
      browser.element(by.css('input[formcontrolName=name]')).sendKeys("TestService1");
      browser.element(by.css('mat-select[formControlName=serviceTypeId]')).click();
      browser.sleep(100);
      browser.element(by.css('mat-option')).click();
      browser.sleep(100);
      browser.element(by.id('saveService')).click();
      browser.sleep(500);
    });

    //mérőműszer hozzáadás
    it('should create instrument',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/instrumentmanagement/instruments');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(1000);
      browser.element(by.id('addInstrument')).click();
      browser.sleep(500);
      browser.element(by.css('input[formcontrolName=laborNumber]')).sendKeys("asd123");
      browser.element(by.css('input[formcontrolName=serialNumber]')).sendKeys("asdasd");
      browser.element(by.css('mat-select[formcontrolName=laborPremisesId]')).click();
      browser.driver.wait(EC.presenceOf(element(by.css('.mat-option'))),5000);
      browser.element(by.css('.mat-option')).click();
      browser.sleep(150);
      browser.element(by.css('mat-select[formControlName=workstationId]')).click();
      browser.element(by.css('mat-option')).click();
      browser.sleep(100);
      browser.element(by.css('mat-select[formControlName=firstInstrumentUserId]')).click();
      browser.element(by.css('mat-option')).click();
      browser.sleep(100);
      browser.element(by.css('mat-select[formControlName=instrumentStatusID]')).click();
      browser.element(by.css('mat-option')).click();
      browser.sleep(100);
      browser.element(by.css('mat-select[formControlName=instrumentTypeId]')).click();
      browser.element(by.css('mat-option')).click();
      browser.sleep(100);
      browser.element(by.css('mat-select[formControlName=measurementTypeId]')).click();
      browser.element(by.css('mat-option')).click();
      browser.sleep(100);
      browser.element(by.css('mat-select[formControlName=quantityUnit]')).click();
      browser.element(by.css('mat-option:nth-child(2)')).click();
      browser.element(by.id('saveInstrument')).click();
      browser.sleep(500);
    });

    //méréstípus hozzáadás
    it('should create measurementType',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/instrumentmanagement/measurementtypes');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(1000);
      browser.element(by.id('addMeasurementType')).click();
      browser.element(by.css('input[formcontrolName=measurementTypeName]')).sendKeys("tipusteszt");
      browser.element(by.css('mat-select[formcontrolName=quantityType]')).click();
      browser.element(by.css('.mat-option')).click();
      browser.sleep(100);
      browser.element(by.css('mat-select[formcontrolName=dataType]')).click();
      browser.element(by.css('.mat-option')).click();
      browser.element(by.id('saveMeasurementType')).click();
      browser.sleep(500);
    });

    //munkaállomás hozzáadás
    it('should create workstation',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/instrumentmanagement/workstations');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(1000);
      browser.element(by.id('addWorkStation')).click();
      browser.element(by.css('input[formcontrolName=workstationName]')).sendKeys("munkaallomasteszt");
      browser.element(by.css('mat-select[formcontrolName=laborPremisesId]')).click();
      browser.element(by.css('.mat-option')).click();
      browser.element(by.id('saveWorkStation')).click();
      browser.sleep(500);
    });

    //vizsgálati típus készítése
    it('should create testType',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/testtypes');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.element(by.id('addTestType')).click();
      browser.sleep(500);
      browser.element(by.css('input[formcontrolName=name]')).sendKeys("testtype");
      browser.sleep(100);
      browser.element(by.css('input[formcontrolName=description]')).sendKeys("leiras");
      browser.sleep(100);
      browser.element(by.css('mat-select[formcontrolName=workflowDefinitionId]')).click();
      browser.sleep(100);
      browser.element(by.css('mat-option:nth-child(2)')).click();
      browser.sleep(100);
      browser.element(by.id('saveTestType')).click();
      browser.sleep(1000);
    });

    //munkafolyamatdefiníció típus készítése
    it('should create workflowdefinitiontype',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/workflowdefinitiontypes');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.element(by.id('addWorkflowDefinitionType')).click();
      browser.element(by.css('input[formcontrolName=name]')).sendKeys("testtype");
      browser.sleep(100);
      browser.element(by.css('input[formcontrolName=description]')).sendKeys("leiras");
      browser.sleep(100);
      browser.element(by.id('saveWorkflowDefinitionType')).click();
      browser.sleep(500);
    });

    //alapanyag szállító hozzáadása
    it('should create rawmaterialsupplier',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/rawmaterialsuppliers');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.element(by.id('addRawMaterialSupplier')).click();
      browser.element(by.css('input[formcontrolName=name]')).sendKeys("testtype");
      browser.sleep(100);
      browser.element(by.css('input[formcontrolName=code]')).sendKeys("c");
      browser.sleep(100);
      browser.element(by.id('saveRawMaterialSupplier')).click();
      browser.sleep(300);
    });

    //nyersanyag hozzáadás
    it('should create rawmaterial',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/rawmaterials');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.element(by.id('addRawMaterial')).click();
      browser.element(by.css('input[formcontrolName=name]')).sendKeys("test");
      browser.sleep(100);
      browser.element(by.css('input[formcontrolName=shortName]')).sendKeys("l");
      browser.sleep(100);
      browser.element(by.id('saveRawMaterial')).click();
      browser.sleep(300);
    });

    //adalékanyagfrakció hozzáadása
    it('should create additivefraction',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/additivefractions');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.element(by.id('addAdditiveFraction')).click();
      browser.element(by.css('input[formcontrolName=name]')).sendKeys("testtype");
      browser.sleep(100);
      browser.element(by.css('input[formcontrolName=shortName]')).sendKeys("leiras");
      browser.sleep(100);
      browser.element(by.css('input[formcontrolName=minimalGrainSize]')).sendKeys("5");
      browser.sleep(100);
      browser.element(by.css('input[formcontrolName=maximalGrainSize]')).sendKeys("10");
      browser.sleep(100);
      browser.element(by.id('saveAdditiveFraction')).click();
      browser.sleep(300);
    });

    //adalékszer hozzáadása
    it('should create additiveagent',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/additiveagents');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.element(by.id('addAdditiveAgent')).click();
      browser.element(by.css('input[formcontrolName=name]')).sendKeys("testtype");
      browser.sleep(100);
      browser.element(by.css('input[formcontrolName=code]')).sendKeys("c");
      browser.sleep(100);
      browser.element(by.css('mat-select[formcontrolName=rawMaterialSupplierId]')).click();
      browser.sleep(100);
      browser.element(by.css('mat-option')).click();
      browser.sleep(100);
      browser.element(by.id('saveAdditiveAgent')).click();
      browser.sleep(300);
    });

    //cement hozzáadása
    it('should create cement',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/cements');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.element(by.id('addCement')).click();
      browser.element(by.css('input[formcontrolName=name]')).sendKeys("testtype");
      browser.sleep(400);
      browser.element(by.css('input[formcontrolName=code]')).sendKeys("c");
      browser.sleep(400);
      browser.element(by.css('mat-select[formcontrolName=rawMaterialSupplierId]')).click();
      browser.sleep(400);
      browser.element(by.css('mat-option')).click();
      browser.sleep(400);
      browser.element(by.id('saveCement')).click();
      browser.sleep(500);
    });

    //bánya hozzáadása
    it('should create mine',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/mines');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.element(by.id('addMine')).click();
      browser.element(by.css('input[formcontrolName=name]')).sendKeys("testtype");
      browser.sleep(100);
      browser.element(by.css('input[formcontrolName=code]')).sendKeys("c");
      browser.sleep(100);
      browser.element(by.css('mat-select[formcontrolName=rawMaterialSupplierId]')).click();
      browser.sleep(100);
      browser.element(by.css('mat-option')).click();
      browser.sleep(100);
      browser.element(by.id('saveMine')).click();
      browser.sleep(300);
    });

    //adalékanyag hozzáadása
    it('should create additive',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/additives');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.element(by.id('addAdditive')).click();
      browser.element(by.css('input[formcontrolName=name]')).sendKeys("testtype");
      browser.sleep(100);
      browser.element(by.css('input[formcontrolName=code]')).sendKeys("c");
      browser.sleep(100);
      browser.element(by.css('mat-select[formcontrolName=rawMaterialSupplierId]')).click();
      browser.sleep(100);
      browser.element(by.css('mat-option')).click();
      browser.sleep(100);
      browser.element(by.css('mat-select[formcontrolName=mineId]')).click();
      browser.sleep(100);
      browser.element(by.css('mat-option')).click();
      browser.sleep(100);
      browser.element(by.css('mat-select[formcontrolName=additiveFractionId]')).click();
      browser.sleep(100);
      browser.element(by.css('mat-option')).click();
      browser.sleep(100);
      browser.element(by.id('saveAdditive')).click();
      browser.sleep(300);
    });

    //output típus készítése
    it('should create outputType',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/outputtypes');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.element(by.id('addOutputType')).click();
      browser.element(by.css('input[formControlName=name]')).sendKeys("output test");
      browser.sleep(100);
      browser.element(by.id('saveOutputType')).click();
      browser.sleep(500);
    });

    //labor hozzáadása
    it('should create labor',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/laborpremises');
      browser.driver.wait(EC.presenceOf(element(by.id('addLaborPremises'))),25000);
      browser.element(by.id('addLaborPremises')).click();
      browser.element(by.css('input[formControlName=laborName]')).sendKeys("Laborteszt");
      browser.element(by.css('input[formControlName=zipCode]')).sendKeys("9600");
      browser.element(by.css('input[formControlName=city]')).sendKeys("Győr");
      browser.element(by.css('input[formControlName=street]')).sendKeys("petofi");
      browser.element(by.css('input[formControlName=houseNumber]')).sendKeys("40");
      browser.element(by.css('input[formControlName=companyName]')).sendKeys("cegnev");
      browser.sleep(100);
      browser.element(by.id('saveLaborPremises')).click();
      browser.sleep(500);
    });
  });

  describe('edit', ()=>{
    //árlista szerkesztése 
    it('should edit pricelist',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/pricelists');
      browser.waitForAngularEnabled(false);
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),10000);
      browser.element.all((by.css('tbody tr'))).last().element(by.css('td button')).click();
      browser.sleep(1000);
      browser.element(by.css('.mat-menu-content div:nth-child(2) button')).click();
      browser.element(by.css('input[formControlName=name]')).clear();
      browser.element(by.css('input[formControlName=name]')).sendKeys("123");
      browser.element(by.id('savepricelist')).click();
      browser.sleep(2000);
      browser.get('http://localhost:4200/#/work/pricelists');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),10000);
      expect(browser.element.all((by.css('tbody tr'))).last().element(by.css("td:nth-child(3)")).getText()).toEqual("123");
    });
  
    //árlista item szerkesztése 
    it('should edit pricelistitem',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/pricelists');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.element.all(by.css('button')).last().click();
      browser.sleep(500);
      browser.element(by.css(".mat-menu-content div:nth-child(3) button")).click();
      browser.sleep(1000);
      browser.element.all((by.css('tbody tr'))).last().element(by.css('td button')).click();
      browser.sleep(500);
      browser.element(by.css('.mat-menu-content div:nth-child(2) button')).click();
      browser.sleep(500);
      browser.element(by.css('input[formControlName=price]')).clear();
      browser.element(by.css('input[formControlName=price]')).sendKeys(1500);
      browser.sleep(100);
      browser.element(by.id('savepricelistitem')).click();
      browser.sleep(1000);
      browser.navigate().refresh();
      browser.sleep(2000);
      expect(browser.element.all((by.css('tbody tr'))).last().element(by.css("td:nth-child(3)")).getText()).toEqual("1,500");
    });
  
    //partner szerkesztédr
    it('should edit partner',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/partners');
      browser.driver.wait(EC.presenceOf(element(by.id('addpartner'))),25000);
      browser.element.all((by.css('tbody tr'))).last().element(by.css('td button')).click();
      browser.sleep(100);
      browser.element(by.css('.mat-menu-content div:nth-child(2) button')).click();
      browser.element(by.css('input[formControlName=companyName]')).clear();
      browser.element(by.css('input[formControlName=companyName]')).sendKeys("comp");
      browser.sleep(100);
      browser.element(by.id('savepartner')).click();
      browser.sleep(500);
      browser.get('http://localhost:4200/#/work/partners');
      browser.driver.wait(EC.presenceOf(element(by.id('addpartner'))),25000);
      expect(browser.element.all((by.css('tbody tr'))).last().element(by.css("td:nth-child(3)")).getText()).toEqual("comp");
    });
  
    //szolgáltatástípus szerkesztése
    it('should edit service type',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/servicetypes');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.element.all((by.css('tbody tr'))).last().element(by.css('td button')).click();
      browser.sleep(100);
      browser.element(by.css('.mat-menu-content div:nth-child(2) button')).click();
      browser.element(by.css('input[formcontrolName=name]')).clear();
      browser.element(by.css('input[formcontrolName=name]')).sendKeys("testedit");
      browser.sleep(100);
      browser.element(by.id('saveServiceType')).click();
      browser.sleep(500);
      browser.get('http://localhost:4200/#/work/servicetypes');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      expect(browser.element.all((by.css('tbody tr'))).last().element(by.css("td:nth-child(3)")).getText()).toEqual("testedit");
    });
  
    //szolgáltatás szerkesztése
    it('should edit service',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/services');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.element.all((by.css('tbody tr'))).last().element(by.css('td button')).click();
      browser.sleep(100);
      browser.element(by.css('.mat-menu-content div:nth-child(2) button')).click();
      browser.element(by.css('input[formcontrolName=name]')).clear();
      browser.element(by.css('input[formcontrolName=name]')).sendKeys("testedit");
      browser.sleep(100);
      browser.element(by.id('saveService')).click();
      browser.sleep(500);
      browser.get('http://localhost:4200/#/work/services');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      expect(browser.element.all((by.css('tbody tr'))).last().element(by.css("td:nth-child(3)")).getText()).toEqual("testedit");
    });
  
    //mérőműszer szerkesztés
    it('should edit instrument',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/instrumentmanagement/instruments');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(200);
      browser.element.all((by.css('tbody tr'))).last().element(by.css('td button')).click();
      browser.sleep(100);
      browser.element(by.css('.mat-menu-content div:nth-child(3) button')).click();
      browser.sleep(200);
      browser.element(by.css('mat-select[formControlName=instrumentTypeId]')).click();
      browser.element(by.css('mat-option')).click();
      browser.sleep(100);
      browser.element(by.id('saveInstrument')).click();
      browser.sleep(500);
      browser.get('http://localhost:4200/#/instrumentmanagement/instruments');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      expect(browser.element.all((by.css('tbody tr'))).last().element(by.css("td:nth-child(5)")).getText()).toEqual("Mérleg");
    });
  
    //méréstípus szerkesztése
    it('should edit measurementType',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/instrumentmanagement/measurementtypes');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(200);
      browser.element.all((by.css('tbody tr'))).last().element(by.css('td button')).click();
      browser.sleep(100);
      browser.element(by.css('.mat-menu-content div:nth-child(2) button')).click();
      browser.element(by.css('input[formcontrolName=description]')).clear();
      browser.element(by.css('input[formcontrolName=description]')).sendKeys("testedit");
      browser.element(by.id('saveMeasurementType')).click();
      browser.sleep(500);
      browser.get('http://localhost:4200/#/instrumentmanagement/measurementtypes');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      expect(browser.element.all((by.css('tbody tr'))).last().element(by.css("td:nth-child(5)")).getText()).toEqual("testedit");
    });
  
    //munkaállomás szerkesztése
    it('should edit workstation',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/instrumentmanagement/workstations');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(200);
      browser.element.all((by.css('tbody tr'))).last().element(by.css('td button')).click();
      browser.sleep(100);
      browser.element(by.css('.mat-menu-content div:nth-child(2) button')).click();
      browser.element(by.css('input[formcontrolName=description]')).clear();
      browser.element(by.css('input[formcontrolName=description]')).sendKeys("testedit");
      browser.element(by.id('saveWorkStation')).click();
      browser.sleep(500);
      browser.get('http://localhost:4200/#/instrumentmanagement/workstations');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      expect(browser.element.all((by.css('tbody tr'))).last().element(by.css("td:nth-child(5)")).getText()).toEqual("testedit");
    });
  
    //vizsgálati típus szerkesztése
    it('should edit testType',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/testtypes');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(200);
      browser.element.all((by.css('tbody tr'))).last().element(by.css('td button')).click();
      browser.sleep(100);
      browser.element(by.css('.mat-menu-content div:nth-child(2) button')).click();
      browser.element(by.css('input[formcontrolName=name]')).clear();
      browser.element(by.css('input[formcontrolName=name]')).sendKeys("testedit");
      browser.element(by.id('saveTestType')).click();
      browser.sleep(500);
      browser.get('http://localhost:4200/#/work/testtypes');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      expect(browser.element.all((by.css('tbody tr'))).last().element(by.css("td:nth-child(3)")).getText()).toEqual("testedit");
    });
    
    //munkafolyamatdefiníció típus szerkesztése
    it('should edit workflowdefinitiontype',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/workflowdefinitiontypes');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(200);
      browser.element.all((by.css('tbody tr'))).last().element(by.css('td button')).click();
      browser.sleep(100);
      browser.element(by.css('.mat-menu-content div:nth-child(2) button')).click();
      browser.element(by.css('input[formcontrolName=name]')).clear();
      browser.element(by.css('input[formcontrolName=name]')).sendKeys("testedit");
      browser.element(by.id('saveWorkflowDefinitionType')).click();
      browser.sleep(500);
      browser.get('http://localhost:4200/#/work/workflowdefinitiontypes');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      expect(browser.element.all((by.css('tbody tr'))).last().element(by.css("td:nth-child(3)")).getText()).toEqual("testedit");
    });
    //nyersanyag szerkesztése
    it('should edit rawmaterial',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/rawmaterials');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(200);
      browser.element.all((by.css('tbody tr'))).last().element(by.css('td button')).click();
      browser.sleep(100);
      browser.element(by.css('.mat-menu-content div:nth-child(2) button')).click();
      browser.element(by.css('input[formcontrolName=name]')).clear();
      browser.element(by.css('input[formcontrolName=name]')).sendKeys("testedit");
      browser.element(by.id('saveRawMaterial')).click();
      browser.sleep(500);
      browser.get('http://localhost:4200/#/work/rawmaterials');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      expect(browser.element.all((by.css('tbody tr'))).last().element(by.css("td:nth-child(3)")).getText()).toEqual("testedit");
    });
  
    //adalékanyagfrakció szerkesztése
    it('should edit additivefraction',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/additivefractions');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(100);
      browser.element.all((by.css('tbody tr'))).last().element(by.css('td button')).click();
      browser.sleep(100);
      browser.element(by.css('.mat-menu-content div:nth-child(2) button')).click();
      browser.element(by.css('input[formcontrolName=shortName]')).clear();
      browser.element(by.css('input[formcontrolName=shortName]')).sendKeys("testedit");
      browser.element(by.id('saveAdditiveFraction')).click();
      browser.sleep(500);
      browser.get('http://localhost:4200/#/work/additivefractions');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      expect(browser.element.all((by.css('tbody tr'))).last().element(by.css("td:nth-child(4)")).getText()).toEqual("testedit");
    });
  
  
    //adalékszer szerkesztése
    it('should edit additiveagent',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/additiveagents');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(100);
      browser.element.all((by.css('tbody tr'))).last().element(by.css('td button')).click();
      browser.sleep(100);
      browser.element(by.css('.mat-menu-content div:nth-child(2) button')).click();
      browser.element(by.css('input[formcontrolName=name]')).clear();
      browser.element(by.css('input[formcontrolName=name]')).sendKeys("testedit");
      browser.element(by.id('saveAdditiveAgent')).click();
      browser.sleep(500);
      browser.get('http://localhost:4200/#/work/additiveagents');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      expect(browser.element.all((by.css('tbody tr'))).last().element(by.css("td:nth-child(3)")).getText()).toEqual("testedit");
    });
  
  
  
    //alapanyag szállító szerkesztése
    it('should edit rawmaterialsupplier',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/rawmaterialsuppliers');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(100);
      browser.element.all((by.css('tbody tr'))).last().element(by.css('td button')).click();
      browser.sleep(100);
      browser.element(by.css('.mat-menu-content div:nth-child(2) button')).click();
      browser.element(by.css('input[formcontrolName=name]')).clear();
      browser.element(by.css('input[formcontrolName=name]')).sendKeys("testedit");
      browser.element(by.id('saveRawMaterialSupplier')).click();
      browser.sleep(500);
      browser.get('http://localhost:4200/#/work/rawmaterialsuppliers');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      expect(browser.element.all((by.css('tbody tr'))).last().element(by.css("td:nth-child(3)")).getText()).toEqual("testedit");
    });
  
    //cement szerkesztése
    it('should edit cement',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/cements');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(100);
      browser.element.all((by.css('tbody tr'))).last().element(by.css('td button')).click();
      browser.sleep(100);
      browser.element(by.css('.mat-menu-content div:nth-child(2) button')).click();
      browser.element(by.css('input[formcontrolName=name]')).clear();
      browser.element(by.css('input[formcontrolName=name]')).sendKeys("testedit");
      browser.sleep(100);
      browser.element(by.id('saveCement')).click();
      browser.sleep(500);
      browser.get('http://localhost:4200/#/work/cements');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      expect(browser.element.all((by.css('tbody tr'))).last().element(by.css("td:nth-child(3)")).getText()).toEqual("testedit");
    });
  
  
  
    //adalékanyag szerkesztése
    it('should edit additive',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/additives');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(100);
      browser.element.all((by.css('tbody tr'))).last().element(by.css('td button')).click();
      browser.sleep(100);
      browser.element(by.css('.mat-menu-content div:nth-child(2) button')).click();
      browser.element(by.css('input[formcontrolName=name]')).clear();
      browser.element(by.css('input[formcontrolName=name]')).sendKeys("testedit");
      browser.element(by.id('saveAdditive')).click();
      browser.sleep(500);
      browser.get('http://localhost:4200/#/work/additives');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      expect(browser.element.all((by.css('tbody tr'))).last().element(by.css("td:nth-child(3)")).getText()).toEqual("testedit");
    });
  
  
    //bánya szerkesztése
    it('should edit mine',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/mines');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(100);
      browser.element.all((by.css('tbody tr'))).last().element(by.css('td button')).click();
      browser.sleep(100);
      browser.element(by.css('.mat-menu-content div:nth-child(2) button')).click();
      browser.element(by.css('input[formcontrolName=name]')).clear();
      browser.element(by.css('input[formcontrolName=name]')).sendKeys("testedit");
      browser.element(by.id('saveMine')).click();
      browser.sleep(500);
      browser.get('http://localhost:4200/#/work/mines');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      expect(browser.element.all((by.css('tbody tr'))).last().element(by.css("td:nth-child(3)")).getText()).toEqual("testedit");
    });

    //output típus szerkesztése
    it('should edit outputType',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/outputtypes');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(200);
      browser.element.all((by.css('tbody tr'))).last().element(by.css('td button')).click();
      browser.sleep(100);
      browser.element(by.css('.mat-menu-content div:nth-child(2) button')).click();
      browser.element(by.css('input[formcontrolName=name]')).clear();
      browser.element(by.css('input[formControlName=name]')).sendKeys("output test edit");
      browser.element(by.id('saveOutputType')).click();
      browser.sleep(500);
      browser.get('http://localhost:4200/#/work/outputtypes');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      expect(browser.element.all((by.css('tbody tr'))).last().element(by.css("td:nth-child(3)")).getText()).toEqual("output test edit");
    });

    //labor szerkesztése
    it('should edit labor',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/laborpremises');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(200);
      browser.element.all((by.css('tbody tr'))).last().element(by.css('td button')).click();
      browser.sleep(100);
      browser.element(by.css('.mat-menu-content div:nth-child(2) button')).click();
      browser.element(by.css('input[formcontrolName=companyName]')).clear();
      browser.element(by.css('input[formcontrolName=companyName]')).sendKeys("testedit");
      browser.element(by.id('saveLaborPremises')).click();
      browser.sleep(500);
      browser.get('http://localhost:4200/#/work/laborpremises');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      expect(browser.element.all((by.css('tbody tr'))).last().element(by.css("td:nth-child(4)")).getText()).toEqual("testedit");
    });
  });

  describe('delete',()=>{

    //árlista item törlés
    it('should delete pricelistitem',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/pricelists');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.element.all(by.css('button')).last().click();
      browser.sleep(500);
      browser.element(by.css(".mat-menu-content div:nth-child(3) button")).click();
      browser.sleep(2000);
      browser.element.all((by.css('mat-checkbox'))).last().click();
      browser.sleep(100);
      browser.driver.wait(EC.presenceOf(element(by.id('deletepricelistitem'))),1000);
      browser.element(by.id('deletepricelistitem')).click();
      browser.sleep(2000);
    });

    //árlista törlése
    it('should delete pricelist',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/pricelists');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(100);
      browser.element.all((by.css('mat-checkbox'))).last().click();
      browser.sleep(100);
      browser.element(by.id('deletepricelist')).click();
      browser.sleep(2000);
    });

    //partner törlése
    it('should delete partner',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/partners');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(400);
      browser.element.all((by.css('mat-checkbox'))).last().click();
      browser.sleep(100);
      browser.element(by.id('deletepartner')).click();
      browser.sleep(2000);
    });

    //szolgáltatástípus törlése
    it('should delete service type',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/servicetypes');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(500);
      browser.element.all((by.css('mat-checkbox'))).last().click();
      browser.sleep(100);
      browser.element(by.id('deleteServiceType')).click();
      browser.sleep(2000);
    });

    //szolgáltatás törlése
    it('should delete service',()=>{
      browser.get('http://localhost:4200/#/work/services');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(500);
      browser.element.all((by.css('mat-checkbox'))).last().click();
      browser.driver.wait(EC.presenceOf(element(by.id('deleteService'))),5000);
      browser.element(by.id('deleteService')).click();
      browser.sleep(2000);
    });

    //mérőműszer törlése
    it('should delete instrument',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/instrumentmanagement/instruments');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(400);
      browser.element.all((by.css('mat-checkbox'))).last().click();
      browser.element(by.id('deleteInstrument')).click();
      browser.sleep(2000);
    });

    //méréstípus törlése
    it('should delete instrument',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/instrumentmanagement/measurementtypes');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(400);
      browser.element.all((by.css('mat-checkbox'))).last().click();
      browser.element(by.id('deleteMeasurementType')).click();
      browser.sleep(2000);
    });

    //munkaállomás törlése
    it('should delete workstation',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/instrumentmanagement/workstations');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(400);
      browser.element.all((by.css('mat-checkbox'))).last().click();
      browser.sleep(100);
      browser.element(by.id('deleteWorkStation')).click();
      browser.sleep(2000);
    });

    //vizsgálati típus törlése
    it('should delete testType',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/testtypes');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(400);
      browser.element.all((by.css('mat-checkbox'))).last().click();
      browser.driver.wait(EC.presenceOf(element(by.id('deleteTestType'))),5000);
      browser.element(by.id('deleteTestType')).click();
      browser.sleep(2000);
    });

    //munkafolyamatdefiníció típus törlése
    it('should delete workflowdefinitiontype',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/workflowdefinitiontypes');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(400);
      browser.element.all((by.css('mat-checkbox'))).last().click();
      browser.driver.wait(EC.presenceOf(element(by.id('deleteWorkflowDefinitionType'))),5000);
      browser.element(by.id('deleteWorkflowDefinitionType')).click();
      browser.sleep(2000);
    });

    //nyersanyag törlés
    it('should delete rawmaterial',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/rawmaterials');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(400);
      browser.element.all((by.css('mat-checkbox'))).last().click();
      browser.driver.wait(EC.presenceOf(element(by.id('deleteRawMaterial'))),5000);
      browser.element(by.id('deleteRawMaterial')).click();
      browser.sleep(2000);
    });

    //adalékanyagfrakció törlése
    it('should delete additivefraction',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/additivefractions');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(400);
      browser.element.all((by.css('mat-checkbox'))).last().click();
      browser.driver.wait(EC.presenceOf(element(by.id('deleteAdditiveFraction'))),5000);
      browser.element(by.id('deleteAdditiveFraction')).click();
      browser.sleep(2000);
    });

    //adalékszer törlése
    it('should delete additiveagent',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/additiveagents');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(400);
      browser.element.all((by.css('mat-checkbox'))).last().click();
      browser.driver.wait(EC.presenceOf(element(by.id('deleteAdditiveAgent'))),5000);
      browser.element(by.id('deleteAdditiveAgent')).click();
      browser.sleep(2000);
    });

    //cement törlése
    it('should delete cement',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/cements');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(400);
      browser.element.all((by.css('mat-checkbox'))).last().click();
      browser.driver.wait(EC.presenceOf(element(by.id('deleteCement'))),5000);
      browser.element(by.id('deleteCement')).click();
      browser.sleep(2000);
    });

    //adalékanyag törlése
    it('should delete additive',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/additives');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(400);
      browser.element.all((by.css('mat-checkbox'))).last().click();
      browser.sleep(500);
      browser.element(by.id('deleteAdditive')).click();
      browser.sleep(2000);
    });

    //bánya törlése
    it('should delete mine',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/mines');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(400);
      browser.element.all((by.css('mat-checkbox'))).last().click();
      browser.driver.wait(EC.presenceOf(element(by.id('deleteMine'))),5000);
      browser.element(by.id('deleteMine')).click();
      browser.sleep(2000);
    });

    //alapanyag szállító törlése
    it('should delete rawmaterialsupplier',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/rawmaterialsuppliers');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(400);
      browser.element.all((by.css('mat-checkbox'))).last().click();
      browser.driver.wait(EC.presenceOf(element(by.id('deleteRawMaterialSupplier'))),5000);
      browser.element(by.id('deleteRawMaterialSupplier')).click();
      browser.sleep(2000);
    });

    //output típus törlése
    it('should delete output type',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/outputtypes');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(500);
      browser.element.all((by.css('mat-checkbox'))).last().click();
      browser.sleep(100);
      browser.element(by.id('deleteOutputType')).click();
      browser.sleep(2000);
    });

    //labor törlése
    it('should delete labor',()=>{
      browser.waitForAngular();
      browser.get('http://localhost:4200/#/work/laborpremises');
      browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),25000);
      browser.sleep(400);
      browser.element.all((by.css('mat-checkbox'))).last().click();
      browser.driver.wait(EC.presenceOf(element(by.id('deleteLaborPremises'))),5000);
      browser.element(by.id('deleteLaborPremises')).click();
      browser.sleep(2000);
    });
  });
});  




/* describe('taskcounting', () => {

  it('should count tasks',()=>{
    browser.waitForAngular();
    browser.get('http://localhost:4200/#/task/tasks');
    browser.driver.wait(EC.presenceOf(element(by.css('mat-slide-toggle'))),25000);
    browser.sleep(1000);
    browser.element(by.css('mat-slide-toggle')).click();
    browser.sleep(6000);
    let taskCount:number;
    element.all(by.css('mat-card-content mat-expansion-panel')).count().then(function(size){
      taskCount=size;
    });
    browser.sleep(1000);
    browser.waitForAngular();
    browser.get('http://localhost:4200/#/form/forms/beerkeztetes');
    browser.driver.wait(EC.presenceOf(element(by.id('addBeerkeztetes'))),25000);
    browser.element(by.id('addBeerkeztetes')).click();
    browser.driver.wait(EC.presenceOf(element(by.css('mat-radio-group'))),25000);
    browser.sleep(1000);
    browser.element(by.css('mat-select:nth-child(1)')).click();
    browser.sleep(1000);
    browser.element(by.css('mat-option:nth-child(2)')).click();
    browser.sleep(1000);
    browser.element(by.css('mat-radio-button[ng-reflect-value=Laboratórium]')).click();
    browser.sleep(1000);
    browser.element(by.css('tr:nth-child(4) mat-select')).click();
    browser.sleep(1000);
    browser.element(by.css('mat-option:nth-child(2)')).click();
    browser.sleep(1000);
    browser.element(by.css('tr:nth-child(4) td:nth-child(3) input')).sendKeys("3");
    browser.element(by.css('tr:nth-child(5) td:nth-child(1) input')).sendKeys("k");
    browser.element(by.css('tr:nth-child(5) td:nth-child(2) input')).sendKeys("j");
    browser.element(by.css('tr:nth-child(6) input')).sendKeys("hely");
    browser.element(by.css('tr:nth-child(7) input')).sendKeys("kivitelezo");
    browser.element(by.css('mat-radio-button[ng-reflect-value=Átlagminta]')).click();
    browser.element(by.css('mat-radio-button[ng-reflect-value="e-UT 07.01.14"]')).click();
    browser.element(by.css('mat-radio-button[ng-reflect-value=Tájékoztató]')).click();
    browser.element(by.css('tr:nth-child(11) td:nth-child(1) input')).sendKeys("tipus");
    browser.element(by.css('tr:nth-child(11) td:nth-child(2) input')).sendKeys("2");
    browser.element(by.css('tr:nth-child(11) td:nth-child(3) input')).sendKeys("3");
    browser.element(by.css('tr:nth-child(12) td:nth-child(1) input')).sendKeys("tipus");
    browser.element(by.css('tr:nth-child(12) td:nth-child(2) input')).sendKeys("2");
    browser.sleep(1000);
    browser.element(by.css('tr:nth-child(13) td:nth-child(1) tr:nth-child(1) td:nth-child(1) mat-select')).click();
    browser.sleep(1000);
    browser.element(by.css('mat-option:nth-child(2)')).click();
    browser.sleep(1000);
    browser.element(by.css('tr:nth-child(13) td:nth-child(1) tr:nth-child(1) td:nth-child(2) input')).sendKeys(1234);
    browser.element(by.css('tr:nth-child(13) td:nth-child(1) tr:nth-child(1) td:nth-child(3) input')).sendKeys(7);
    browser.element(by.css('tr:nth-child(13) td:nth-child(1) tr:nth-child(1) td:nth-child(4) input')).sendKeys(1);
    browser.sleep(2000);
    let dateInput=browser.element(by.css('tr:nth-child(13) td:nth-child(1) tr:nth-child(1) td:nth-child(5) input'));
    for(let i=0;i<=11;i++){
      dateInput.sendKeys(Key.BACK_SPACE);
    }
    browser.sleep(500);
    browser.element(by.css('app-save-fab eco-fab-speed-dial button')).click();
    browser.sleep(1000);
    browser.element(by.css('app-save-fab eco-fab-speed-dial-actions button:nth-child(3)')).click();
    browser.sleep(6000);
    browser.waitForAngular();
    browser.get('http://localhost:4200/#/task/tasks');
    browser.driver.wait(EC.presenceOf(element(by.css('mat-slide-toggle'))),25000);
    browser.sleep(1000);
    browser.element(by.css('mat-slide-toggle')).click();
    browser.sleep(6000);
    let sum;
    element.all(by.css('mat-card-content mat-expansion-panel')).count().then(function(size){
      sum=size;
      expect(sum).toBe(taskCount+1); 
    });
  });
}); */

describe('workflow testing', () => {

  it('should create workflow',()=>{
    page.login();
    browser.driver.wait(EC.presenceOf(element(by.css('mat-toolbar'))),10000);
    browser.get('http://localhost:4200/#/workflow/workflowdefinitions');
    browser.waitForAngularEnabled(false);
    browser.driver.wait(EC.presenceOf(element(by.css('app-table mat-toolbar span button'))),10000);
    browser.sleep(1000);
    browser.element(by.id('addWorkFlowDefinition')).click();
    browser.element(by.css('mat-form-field:nth-child(3) input')).sendKeys("deftest");
    browser.element(by.css('mat-form-field:nth-child(4) input')).sendKeys("desctest");
    browser.element(by.css('mat-form-field:nth-child(5) mat-select')).click();
    browser.sleep(1000);
    browser.element(by.css('mat-option')).click();
    browser.sleep(1000);
    browser.element(by.css('mat-form-field:nth-child(6) mat-select')).click();
    browser.sleep(1000);
    browser.element(by.css('mat-option')).click();
    browser.sleep(1000);
    browser.element(by.css('app-save-fab eco-fab-speed-dial button')).click();
    browser.sleep(1000);
    browser.element(by.css('app-save-fab eco-fab-speed-dial-actions button:nth-child(3)')).click();
    browser.sleep(6000);
  }); 

  it('should create task in workflow',()=>{
    browser.waitForAngular();
    page.editWorkFlow();
    browser.element(by.css('.mat-menu-trigger')).click();
    browser.sleep(1000);
    browser.element(by.css('.mat-menu-content button:nth-child(1)')).click();
    browser.sleep(1000);
    browser.element.all((by.css('div[ng-reflect-sortablejs] mat-expansion-panel-header'))).last().click();
    browser.sleep(200);
    browser.element.all((by.css('div[ng-reflect-sortablejs] .mat-expansion-panel-body'))).last().element(by.css('mat-form-field:nth-child(1) input'))
    .sendKeys("task1");
    browser.element.all((by.css('div[ng-reflect-sortablejs] .mat-expansion-panel-body'))).last().element(by.css('mat-form-field:nth-child(2) input'))
    .sendKeys("description1");
    browser.element.all((by.css('div[ng-reflect-sortablejs] .mat-expansion-panel-body'))).last().element(by.css('mat-form-field:nth-child(8) mat-select'))
    .click();
    browser.sleep(500);
    browser.element(by.css('mat-option')).click();
    browser.sleep(500);
    browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    browser.element(by.css('app-save-fab eco-fab-speed-dial button')).click();
    browser.sleep(1000);
    browser.element(by.css('app-save-fab eco-fab-speed-dial-actions button:nth-child(3)')).click();
    browser.sleep(2000);
  });

  it('should create notification in workflow',()=>{
    browser.waitForAngular();
    page.editWorkFlow();
    browser.element(by.css('.mat-menu-trigger')).click();
    browser.sleep(1000);
    browser.element(by.css('.mat-menu-content button:nth-child(2)')).click();
    browser.sleep(1000);
    browser.element.all((by.css('div[ng-reflect-sortablejs] mat-expansion-panel-header'))).last().click();
    browser.sleep(200);
    browser.element.all((by.css('div[ng-reflect-sortablejs] .mat-expansion-panel-body'))).last().element(by.css('mat-form-field:nth-child(1) input'))
    .sendKeys("noti1");
    browser.element.all((by.css('div[ng-reflect-sortablejs] .mat-expansion-panel-body'))).last().element(by.css('mat-form-field:nth-child(2) input'))
    .sendKeys("notidesc1");
    browser.element.all((by.css('div[ng-reflect-sortablejs] .mat-expansion-panel-body'))).last().element(by.css('mat-form-field:nth-child(3) mat-select'))
    .click();
    browser.sleep(500);
    browser.element(by.css('mat-option')).click();
    browser.sleep(500);
    browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    browser.element(by.css('app-save-fab eco-fab-speed-dial button')).click();
    browser.sleep(1000);
    browser.element(by.css('app-save-fab eco-fab-speed-dial-actions button:nth-child(3)')).click();
    browser.sleep(2000);
  });
  
  it('should create waiting in workflow',()=>{
    browser.waitForAngular();
    page.editWorkFlow();
    browser.element(by.css('.mat-menu-trigger')).click();
    browser.sleep(1000);
    browser.element(by.css('.mat-menu-content button:nth-child(3)')).click();
    browser.sleep(1000);
    browser.element.all((by.css('div[ng-reflect-sortablejs] mat-expansion-panel-header'))).last().click();
    browser.sleep(200);
    browser.element.all((by.css('div[ng-reflect-sortablejs] .mat-expansion-panel-body'))).last().element(by.css('mat-form-field:nth-child(1) mat-select'))
    .click();
    browser.sleep(500);
    browser.element(by.css('mat-option')).click();
    browser.sleep(200);
    browser.element.all((by.css('div[ng-reflect-sortablejs] .mat-expansion-panel-body'))).last().element(by.css('mat-form-field:nth-child(2) mat-select'))
    .click();
    browser.sleep(500);
    browser.element(by.css('mat-option')).click();
    browser.sleep(200);
    browser.element(by.css('app-save-fab eco-fab-speed-dial button')).click();
    browser.sleep(1000);
    browser.element(by.css('app-save-fab eco-fab-speed-dial-actions button:nth-child(3)')).click();
    browser.sleep(2000);
  }); 
  

  it('should create decision branch in workflow',()=>{
    browser.waitForAngular();
    page.editWorkFlow();
    browser.element(by.css('.mat-menu-trigger')).click();
    browser.sleep(1000);
    browser.element(by.css('.mat-menu-content button:nth-child(4)')).click();
    browser.sleep(1000);
    browser.element.all((by.css('div[ng-reflect-sortablejs] mat-expansion-panel-header'))).last().click();
    browser.sleep(200);

    //értesítés alapértelmezett ág
    browser.element.all((by.css('div[ng-reflect-sortablejs] .mat-expansion-panel-body'))).get(3)
    .all(by.css("button")).get(0).click();
    browser.sleep(1000);
    browser.element(by.css('.mat-menu-content button:nth-child(2)')).click();
    browser.sleep(1500);
    browser.element.all((by.css('div[ng-reflect-sortablejs] mat-expansion-panel-header'))).last().click();
    browser.sleep(1000);
    browser.element.all((by.css('div[ng-reflect-sortablejs] .mat-expansion-panel-body'))).last()
    .element(by.css('mat-form-field:nth-child(1) input')).sendKeys("noti1");
    browser.element.all((by.css('div[ng-reflect-sortablejs] .mat-expansion-panel-body'))).last()
    .element(by.css('mat-form-field:nth-child(2) input')).sendKeys("notidesc1");
    browser.element.all((by.css('div[ng-reflect-sortablejs] .mat-expansion-panel-body'))).last()
    .element(by.css('mat-form-field:nth-child(3) mat-select')).click();
    browser.sleep(500);
    browser.element(by.css('mat-option')).click();
    browser.sleep(500);
    browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    browser.sleep(3000);

    // döntési ág task
    browser.element.all((by.css('div[ng-reflect-sortablejs] .mat-expansion-panel-body'))).get(3)
    .all(by.css("input")).last().sendKeys("done");
    const lastdiv=browser.element.all((by.css('div[ng-reflect-sortablejs] .mat-expansion-panel-body'))).get(3)
    .element(by.css('div:nth-child(1)')).all(by.css('div')).last();
    lastdiv.element(by.css("button")).click();
    browser.sleep(1000);
    browser.element(by.css('.mat-menu-content button:nth-child(1)')).click();
    browser.sleep(1500);
    browser.element.all((by.css('div[ng-reflect-sortablejs] mat-expansion-panel-header'))).last().click();
    browser.sleep(1000);
    browser.element.all((by.css('div[ng-reflect-sortablejs] .mat-expansion-panel-body'))).last()
    .element(by.css('mat-form-field:nth-child(1) input'))
    .sendKeys("task1");
    browser.element.all((by.css('div[ng-reflect-sortablejs] .mat-expansion-panel-body'))).last()
    .element(by.css('mat-form-field:nth-child(2) input'))
    .sendKeys("description1");
    browser.element.all((by.css('div[ng-reflect-sortablejs] .mat-expansion-panel-body'))).last()
    .element(by.css('mat-form-field:nth-child(8) mat-select'))
    .click();
    browser.sleep(500);
    browser.element(by.css('mat-option')).click();
    browser.sleep(500);
    browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    browser.element(by.css('app-save-fab eco-fab-speed-dial button')).click();
    browser.sleep(1000);
    browser.element(by.css('app-save-fab eco-fab-speed-dial-actions button:nth-child(3)')).click();
    browser.sleep(2000);
  }); 

  it('should create parallelization in workflow',()=>{
    page.login();
    browser.driver.wait(EC.presenceOf(element(by.css('mat-toolbar'))),10000);
    page.editWorkFlow();
    browser.element.all(by.css('.mat-menu-trigger')).last().click();
    browser.sleep(1000);
    browser.element(by.css('.mat-menu-content button:nth-child(5)')).click();
    browser.sleep(1000);
    browser.element.all((by.css('div[ng-reflect-sortablejs] mat-expansion-panel-header'))).last().click();
    browser.sleep(200);

    //párhuzamositás #1
    
    browser.element.all((by.css('div[ng-reflect-sortablejs] .mat-expansion-panel-body'))).get(6)
    .all(by.css("button")).get(0).click();
    browser.sleep(1000);
    browser.element(by.css('.mat-menu-content button:nth-child(1)')).click();
    browser.sleep(1500);
    browser.element.all((by.css('div[ng-reflect-sortablejs] mat-expansion-panel-header'))).last().click();
    browser.sleep(1000);
    browser.element.all((by.css('div[ng-reflect-sortablejs] .mat-expansion-panel-body'))).last()
    .element(by.css('mat-form-field:nth-child(1) input'))
    .sendKeys("task1");
    browser.element.all((by.css('div[ng-reflect-sortablejs] .mat-expansion-panel-body'))).last()
    .element(by.css('mat-form-field:nth-child(2) input'))
    .sendKeys("description1");
    browser.element.all((by.css('div[ng-reflect-sortablejs] .mat-expansion-panel-body'))).last()
    .element(by.css('mat-form-field:nth-child(8) mat-select'))
    .click();
    browser.sleep(500);
    browser.element(by.css('mat-option')).click();
    browser.sleep(500);
    browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    browser.sleep(3000);

    // párhuzamositás #2

    browser.element.all((by.css('div[ng-reflect-sortablejs] .mat-expansion-panel-body'))).get(6)
    .all(by.css("button")).get(3).click();
    browser.sleep(1000);
    browser.sleep(1000);
    browser.element(by.css('.mat-menu-content button:nth-child(1)')).click();
    browser.sleep(1500);
    browser.element.all((by.css('div[ng-reflect-sortablejs] mat-expansion-panel-header'))).last().click();
    browser.sleep(1000);
    browser.element.all((by.css('div[ng-reflect-sortablejs] .mat-expansion-panel-body'))).last()
    .element(by.css('mat-form-field:nth-child(1) input'))
    .sendKeys("task1");
    browser.element.all((by.css('div[ng-reflect-sortablejs] .mat-expansion-panel-body'))).last()
    .element(by.css('mat-form-field:nth-child(2) input'))
    .sendKeys("description1");
    browser.element.all((by.css('div[ng-reflect-sortablejs] .mat-expansion-panel-body'))).last()
    .element(by.css('mat-form-field:nth-child(8) mat-select'))
    .click();
    browser.sleep(500);
    browser.element(by.css('mat-option')).click();
    browser.sleep(500);
    browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    browser.element(by.css('app-save-fab eco-fab-speed-dial button')).click();
    browser.sleep(1000);
    browser.element(by.css('app-save-fab eco-fab-speed-dial-actions button:nth-child(3)')).click();
    browser.sleep(2000); 
  });
}); 
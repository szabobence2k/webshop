'use strict';

const helper = {};

helper.setLocation = (location) => {
    browser.setLocation(location);
    //wait until it is loaded
    browser.waitForAngular();
};

helper.setInputValue = (inputModel, inputText) => {
    var input = element(by.model(inputModel));
    input.sendKeys(inputText);
    browser.waitForAngular();
};

helper.setInputValueDate = (inputModel, inputText) => {
    var input = element(by.model(inputModel));
    input.sendKeys(inputText);
    input.sendKeys(protractor.Key.TAB);
    browser.waitForAngular();
};

helper.setMdSelectValue = (selectModel, selectHeaderSearchModel, searchText) => {
    //get all the required form elements and fill it with test data
    let selectElement = element(by.model(selectModel));
    //open select
    selectElement.click();
    //wait until dropdown animation finishes
    browser.waitForAngular();
    //get the search header and search for exact element and try to select it
    let searchInput = element(by.model(selectHeaderSearchModel));
    searchInput.sendKeys(searchText);
    //itemCategorySelect.sendKeys(protractor.Key.DOWN);
    element(by.css('.md-select-menu-container.md-active md-option')).click();
    //wait until dropdown animation finishes
    browser.waitForAngular();
};

helper.setMdAutocompleteValue = (placeholderText, searchText) => {
    var input = element(by.css(`input[placeholder="${placeholderText}"]`));
    input.sendKeys(searchText);
    browser.waitForAngular();
    input.sendKeys(protractor.Key.DOWN);
    input.sendKeys(protractor.Key.ENTER);
    browser.waitForAngular();

    // let until = protractor.ExpectedConditions;
    // let suggestion = element.all(by.css('li[md-virtual-repeat]')).get(0);
    // browser.wait(until.presenceOf(suggestion), 5000).then(() => {
    //     suggestion.click();
    //     browser.ignoreSynchronization = false;
    // });    
};

helper.clickButtonByAriaLabel = (labelText, scrollIntoView) => {
    let button = element(by.css(`button[aria-label="${labelText}"]`));
    if (scrollIntoView) {
        browser.executeScript('arguments[0].scrollIntoView();', button.getWebElement()).then(function() {
            button.click();
        });
    } else {
        button.click();
    }
    
    browser.waitForAngular();
};

helper.clickButtonByIdInForm = (formName, buttonId) => {
    var form = element(by.name(formName));
    var saveButton = form.element(by.id(buttonId));
    saveButton.click();
    browser.waitForAngular();
};

helper.clickTableRow = (selectItemName) => {
    let row = element.all(by.css(`tr.md-row[md-select="${selectItemName}"]`)).get(0);
    let secondCellOfRow = row.all(by.tagName('td')).get(1);
    secondCellOfRow.click();
};

helper.submitForm = (formName) => {
    var form = element(by.name(formName));
    form.submit();
    browser.waitForAngular();
};

helper.changeTab = (index) => {
    let tab = element.all(by.css('md-tab-item')).get(index);
    tab.click();
    browser.waitForAngular();
};

helper.filterBy = (filterObject, memberName, filterValue) => {
    let filterButton = element.all(by.css(`md-filter-by[filter-object="${filterObject}"][filter-member="${memberName}"]`)).get(0);
    filterButton.click();

    let filterInput = element(by.model('filterText'));
    filterInput.sendKeys(filterValue);
    filterInput.sendKeys(protractor.Key.ENTER);
    browser.waitForAngular();
};

helper.waitForSuccessToast = (seconds, message) => {
    browser.ignoreSynchronization = true
    let until = protractor.ExpectedConditions;
    let elem = element(by.className('alert-success'));
    browser.wait(until.presenceOf(elem), seconds * 1000, message).then(() => {
        browser.ignoreSynchronization = false;
    });
};

module.exports = helper;
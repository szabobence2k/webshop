
exports.config = {
    allScriptsTimeout: 21000,
    specs: [
        './src/shop.spec.js'
    ],
    capabilities: {
        browserName: 'chrome'
    },
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 50000,
        print: function () { }
    },
    onPrepare: function () {
        browser.ignoreSynchronization = true;
      },
};

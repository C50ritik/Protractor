var HtmlReporter = require('protractor-beautiful-reporter');
exports.config={
    
    seleniumAddress:"http://localhost:4444/wd/hub",
    specs:["Specc.js"],

    onPrepare: function() {
        jasmine.getEnv().addReporter(new HtmlReporter({
           baseDirectory: 'report/screenshots'
        }).getJasmine2Reporter());
     }
}

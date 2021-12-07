const { browser, element } = require("protractor");
describe("Final Exam", function () {
  beforeEach(function () {
    browser.get("http://juliemr.github.io/protractor-demo/");
  });
  it("Title Testing", function () {
    expect(browser.getTitle()).toEqual("Super Calculator");
  });

  it("Calculator", function () {
    element(by.model("first")).sendKeys(10);
    element(by.model("second")).sendKeys(18);
    //element()
    element(by.id("gobutton")).click();
    browser.driver.sleep(2000);
    expect(element(by.className("ng-binding")).getText()).toEqual('28');
    browser.driver.sleep(4000);
  });
});

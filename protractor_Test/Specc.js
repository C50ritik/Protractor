const { browser, element } = require("protractor");

var first_no=element(by.model("first"));
var second_no=element(by.model("second"));
var go_button=element(by.id("gobutton"));
var result=element(by.className("ng-binding"));
var history=element.all(by.repeater("result in memory"));

describe("Final Exam", function () {
    beforeEach(function () {
        browser.get("http://juliemr.github.io/protractor-demo/");
        browser.manage().window().maximize();
      });
  function add(a,b){
      first_no.sendKeys(a);
      second_no.sendKeys(b);
      go_button.click();
  }
  it("Testing Add Functionality", function () {
    add(5,6);
    add(10,18);
    add(5,4);
    expect(history.count()).toEqual(3);
    add(5,4);
    expect(history.count()).toEqual(4);
});

it("Testing Add Functionality_2", function () {
    add(5,6);
    add(10,18);
    add(5,4);
    expect(history.count()).toEqual(33);
});

});
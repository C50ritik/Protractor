const { browser, element } = require("protractor")

describe("Enter name",function(){
    it("Should enter name as Ritik_Js",function(){
        browser.get("https://angularjs.org/");
        expect(browser.getTitle()).toEqual("AngularJS — Superheroic JavaScript MVW Framework");
        element(by.model("yourName")).sendKeys("Ritik");
        var nametext=element(by.xpath("/html[1]/body[1]/div[2]/div[1]/div[2]/div[2]/div[1]/h1[1]"));
        expect(nametext.getText()).toEqual("Hello Ritik!");
        browser.driver.sleep(4000);
    })
})

describe("Demo Test",function(){
    it("Compare_Title",function(){
        browser.get("http://juliemr.github.io/protractor-demo/");
        expect(browser.getTitle()).toEqual("Super Calculator");
        element(by.model("first")).sendKeys("10")
        element(by.model("second")).sendKeys("18")
        //element()
        element(by.id("gobutton")).click();
        browser.driver.sleep(4000);
    })
})


// 

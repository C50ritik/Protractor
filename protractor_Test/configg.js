exports.config={
    seleniumAddress:"http://localhost:4444/wd/hub",
    specs:["Specc.js"],
    capabilities:
    //     browserName:"chrome"
    // },
    {
        browserName:"firefox"
    }
}

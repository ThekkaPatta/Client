const { expect } = require("chai");
const { Builder, until, By, Key, sleep } = require("selenium-webdriver");
const { Given, Then, When, Before, After } = require("@cucumber/cucumber");
const { delay } = require("../utils/delay");



// Given("Test registration functionality", { timeout: 30000 }, async function () {
//     let driver = await new Builder().forBrowser("chrome").build();
//     await driver.get("http://localhost:3000/registeruser");
//     await driver.findElement(By.id("UFullNames")).sendKeys("test");
//     await driver.sleep(delay);
//     await driver.findElement(By.id("UAddresss")).sendKeys("test");
//     await driver.findElement(By.id("UPhoneNos")).sendKeys("12345");
//     await driver.findElement(By.id("UUsernames")).sendKeys("test");
//     await driver.findElement(By.id("UPasswords")).sendKeys("test");
//     await driver.sleep(delay);
//     await driver.findElement(By.id("btnsubmit")).click();
//     await driver.wait(until.elementLocated(By.id("userregisterfrm")), 30000);
//     expect(await driver.wait(until.elementLocated(By.id("userregisterfrm"))));

// });

// Given("Test userlogin functionality", { timeout: 30000 }, async function () {
//     let driver = new Builder().forBrowser("chrome").build();
//     await driver.get("http://localhost:3000/loginuser");
//     await driver.findElement(By.id("usrnm")).sendKeys("test");
//     await driver.findElement(By.id("psswrd")).sendKeys("test");
//     await driver.sleep(delay);
//     await driver.findElement(By.id("usrsb")).click();
//     await driver.wait(until.elementLocated(By.id("lgnuserfr")), 30000);
//     expect(await driver.wait(until.elementLocated(By.id("lgnuserfr"))));

// });


// Given("Test workerlogin functionality", { timeout: 30000 }, async function () {
//     let driver = new Builder().forBrowser("chrome").build();
//     await driver.get("http://localhost:3000/loginworker");
//     await driver.findElement(By.id("usrnm")).sendKeys("biraj");
//     await driver.findElement(By.id("psswrd")).sendKeys("biraj");
//     await driver.sleep(delay);
//     await driver.findElement(By.id("usrsb")).click();
//     await driver.wait(until.elementLocated(By.id("lgnworkerfrm")), 30000);
//     expect(await driver.wait(until.elementLocated(By.id("lgnworkerfrm"))));

// });

// Given("Test search works", { timeout: 30000 }, async function () {
//     let driver = new Builder().forBrowser("chrome").build();
//     await driver.get("http://localhost:3000/loginworker");
//     await driver.findElement(By.id("usrnm")).sendKeys("biraj");
//     await driver.findElement(By.id("psswrd")).sendKeys("biraj");
//     await driver.sleep(delay);
//     await driver.findElement(By.id("usrsb")).click();
//     await driver.sleep(delay);
//     await driver.findElement(By.id("srchwrk")).sendKeys("wa");

// });

// Given ("Test for bid",{timeout:30000}, async function (){
//     let driver = new Builder().forBrowser("chrome").build();
//     await driver.get("http://localhost:3000/");
//     await driver.findElement(By.id("btnbid")).click();

//     await driver.wait(until.elementLocated(By.id("thisid")), 30000);
//     expect(await driver.wait(until.elementLocated(By.id("thisid"))));
//     await driver.sleep(delay);
//     await driver.findElement(By.id("bidp")).sendKeys("11");
//     await driver.findElement(By.id("workt")).sendKeys("11");

// });

// Given("Test user edit", { timeout: 30000 }, async function () {
//     let driver = new Builder().forBrowser("chrome").build();
//     await driver.get("http://localhost:3000/loginuser");
//     await driver.findElement(By.id("usrnm")).sendKeys("test");
//     await driver.findElement(By.id("psswrd")).sendKeys("test");
//     await driver.findElement(By.id("usrsb")).click();
//     await driver.sleep(delay);
//     await driver.findElement(By.id("ownus")).click();
//     await driver.sleep(delay); 
//     await driver.findElement(By.id("edtbn")).click();
//     await driver.sleep(delay); 
//     await driver.findElement(By.id("UAddresss")).sendKeys("test11");
//     await driver.sleep(delay); 
//     await driver.findElement(By.id("btnsubmit")).click();

// })

// Given("Test bid work", { timeout: 30000 }, async function () {
//     let driver = new Builder().forBrowser("chrome").build();
//     await driver.get("http://localhost:3000/loginworker");
//     await driver.findElement(By.id("usrnm")).sendKeys("biraj");
//     await driver.findElement(By.id("psswrd")).sendKeys("biraj");
//     await driver.sleep(delay);
//     await driver.findElement(By.id("usrsb")).click();
//     await driver.sleep(delay);
//     await driver.findElement(By.id("srchwrk")).sendKeys("wa");
//     await driver.sleep(delay);
//     await driver.findElement(By.id("btnbid")).click();
//     await driver.sleep(delay);

// });

Given("Test view bidders functionality", { timeout: 30000 }, async function () {
    let driver = new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/loginuser");
    await driver.findElement(By.id("usrnm")).sendKeys("agraj");
    await driver.findElement(By.id("psswrd")).sendKeys("agraj");
    await driver.sleep(delay);
    await driver.findElement(By.id("usrsb")).click();
    await driver.sleep(delay);
    await driver.findElement(By.id("btnworks")).click();
    await driver.sleep(delay);
    await driver.findElement(By.id("seebtn")).click();

    

});





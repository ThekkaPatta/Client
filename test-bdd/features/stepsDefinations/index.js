const {expect} = require ("chai");
const { Builder,until,By,Key,sleep } = require ("selenium-webdriver");
const {Given,Then,When,Before,After} = require("@cucumber/cucumber");
const {delay} = require("../utils/delay");



Given ("Test registration functionality",{timeout:30000},async function(){
let driver = await new Builder().forBrowser("chrome").build();
await driver.get("http://localhost:3000/registeruser");
await driver.findElement(By.id("UFullNames")).sendKeys("test");
await driver.findElement(By.id("UAddresss")).sendKeys("test");
await driver.findElement(By.id("UPhoneNos")).sendKeys("12345");
await driver.findElement(By.id("UUsernames")).sendKeys("test");
await driver.findElement(By.id("UPasswords")).sendKeys("test");
await driver.sleep(delay);
await driver.findElement(By.id("btnsubmit")).click();

await driver.wait(until.elementLocated(By.id("userregisterfrm")),30000);
expect(await driver.wait(until.elementLocated(By.id("userregisterfrm"))));

});
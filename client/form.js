
const {Builder, By, Key, until} = require('selenium-webdriver');

var driver = new Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://localhost:3030')
    .then(_ =>
          driver.findElement(By.name('firstname')).sendKeys('webdriver'))
    .then(_ => driver.findElement(By.id('female')).click())
    .then(_ => driver.findElement(By.id('sub')).click())
    .then(_ => driver.findElement(By.id('firstname')).sendKeys('second name'))
    .then(_ => driver.findElement(By.id('male')).click())
    .then(_ => driver.findElement(By.id('sub')).click())
    .then(_ => driver.findElement(By.id('firstname')).sendKeys('third name'))
    .then(_ => driver.findElement(By.id('female')).click())
    .then(_ => driver.findElement(By.id('sub')).click())
    .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 1000))
    .then(_ => driver.quit());

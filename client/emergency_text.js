
const {Builder, By, Key, until} = require('selenium-webdriver');

var driver = new Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://www.rjrpassportsandvisas.com')
    .then(_ => driver.findElement(By.css('#EmergencyBox button')).click())
    .then(_ => driver.findElement(By.id('TextMe')).click())
    .then(_ => driver.findElement(By.css('#EmergencyTextDiv .EmergencyName')).sendKeys('john wood'))
    .then(_ => driver.findElement(By.id('EmergencyText')).sendKeys('9726708018'))
    .then(_ => driver.findElement(By.id('EmergencyTextSubmit')).click())
    .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 100000))
    .then(_ => driver.quit());

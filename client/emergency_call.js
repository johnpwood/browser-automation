
const {Builder, By, Key, until} = require('selenium-webdriver');

var driver = new Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://www.rjrpassportsandvisas.com')
    .then(_ => driver.findElement(By.css('#EmergencyBox button')).click())
    .then(_ => driver.findElement(By.id('CallMe')).click())
    .then(_ => driver.findElement(By.css('#EmergencyPhoneDiv .EmergencyName')).sendKeys('john wood'))
    .then(_ => driver.findElement(By.id('EmergencyPhone')).sendKeys('9726708018'))
    .then(_ => driver.findElement(By.id('BestContactTime')).click())
    .then(_ => driver.findElement(By.id('BestContactTime')).then(e => e.findElements(By.css('option')).then(f => f[1].click())))
    .then(_ => driver.findElement(By.id('EmergencyPhoneSubmit')).click())
    .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 100000))
    .then(_ => driver.quit());

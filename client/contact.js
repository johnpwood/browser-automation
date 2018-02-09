
const {Builder, By, Key, until} = require('selenium-webdriver');

var driver = new Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://www.rjrpassportsandvisas.com/ContactUs.php')
    .then(_ =>
          driver.findElement(By.id('ContactName')).sendKeys('john wood'))
    .then(_ => driver.findElement(By.id('ContactPhone')).sendKeys('9726708018'))
    .then(_ => driver.findElement(By.id('ContactEmail')).sendKeys('johnpwoodiv@gmail.com'))
    .then(_ => driver.findElement(By.id('ContactCompany')).sendKeys('DevMountain'))
    .then(_ => driver.findElement(By.id('ContactMessage')).sendKeys('I need a visa to Russia and I can\'t figure out what\'s the soonest I can get it.  Can someone help me, please?  Thank you!'))
    .then(_ => driver.findElement(By.id('ContactFormSubmit')).click();
    // .then(_ => driver.findElement(By.id('sub')).click())
    .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 1000))
    .then(_ => driver.quit());

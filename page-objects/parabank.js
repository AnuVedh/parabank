const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {
   // parabank: "https://para.testar.org/parabank/index.htm",
    parabank: 'https://parabank.parasoft.com/parabank/index.htm',
    elements: {
        //Registration Xapths

        //LoginWithValid
        customerLogin: '//*[@id="leftPanel"]/h2',
        username: by.name('username'),
        password: by.name('password'),
        loginBtn: '//*[@id="loginPanel"]/form/div[3]/input',
        //welcome: '//*[@id="leftPanel"]/p',
        welcome: '//*[@id="rightPanel"]/h1',
        customerlookUp: '//*[@id="rightPanel"]/h1',
      //  Logininfo: '//*[@id="rightPanel"]/p[2]',
        Logininfo: '//*[@id="rightPanel"]/h1',
        findLoginBtn: '//*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input',
        //*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input
        
        //forgetLogin
        forgotLoginLink: '//*[@id="loginPanel"]/p[1]/a',
        //customerLookUp
         FirstName: by.name("firstName"),
         LastName: by.name("lastName"),
         Address: by.name("address.street"),
         City: by.name("address.city"),
         State: by.name("address.state"),
         ZipCode: by.name("address.zipCode"),
         SSN: by.name("ssn"),
         loginInfo: '//*[@id="rightPanel"]/p[1]',
                       // findLogin: '//*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input'
         
         registerLink: '//*[@id="loginPanel"]/p[2]/a',      
         RegFirstN: by.name("customer.firstName"),
         RegLastN: by.name("customer.lastName"),
         RegAddres: by.name("customer.address.street"),
         Regcity: by.name("customer.address.city"),
         Regstate: by.name("customer.address.state"),
         Regzip: by.name("customer.address.zipCode"),
         Regphone: by.name("customer.phoneNumber"),
         Regssn: by.name("customer.ssn"),
         RegUser: by.name("customer.username"),
         RegPswd: by.name("customer.password"),
         RegConfirm: by.name("repeatedPassword"),
         RegisterBtn: '//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input',
         welcomemsg: '//*[@id="rightPanel"]/h1',
    },

clickElement: async function (objectKey) { // LoginButton
    // eslint-disable-next-line no-console
    console.log('The objectKey  is: '+objectKey) 
    const selector = this.elements[objectKey];
    console.log('The xpath expression is: '+selector)  //*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a
    await driver.sleep(3000);
    return driver.findElement(By.xpath(selector)).click();
},

inputElement: async function (inputname, inputvalue) { // username or password
    const selector = this.elements[inputname];
    await driver.sleep(3000);
    return driver.findElement(selector).sendKeys(inputvalue);
   
},
clickElement: async function (objectKey) { 
    // eslint-disable-next-line no-console
    console.log('The objectKey  is: '+objectKey) 
    const selector = this.elements[objectKey];
    console.log('The xpath expression is: '+selector)  //*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a
    await driver.sleep(3000);
    return driver.findElement(By.xpath(selector)).click();
},
elementExists: async function (objectKey) {
    // eslint-disable-next-line no-console
    const selector = this.elements[objectKey]; 
    await driver.sleep(1000);
    return driver.findElement(By.xpath(selector)); // true // false
},
};
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
         welcomeMsg: '//*[@id="leftPanel"]/p',//*[@id="leftPanel"]/p/b
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
         
         TransferFund: '//*[@id="leftPanel"]/ul/li[3]/a',
         amount: by.name("input"),
         account1: '//*[@id="fromAccountId"]/option[2]',
         account2: '//*[@id="toAccountId"]/option[1]',
         transferBtn: '//*[@id="rightPanel"]/div/div/form/div[2]/input',
         transferConfirmMsg: '//*[@id="rightPanel"]/div/div/h1',
         accountServicesHeader: '//*[@id="leftPanel"]/h2',
         openNewAccLink: '//*[@id="leftPanel"]/ul/li[1]/a',//*[@id="leftPanel"]/ul/li[1]/a
         openAccMsg: '//*[@id="rightPanel"]/div/div/h1',
         savings: '//*[@id="type"]/option[2]',
         openNewAccBtn: '//*[@id="rightPanel"]/div/div/form/div/input',
         accOpenedMsg: '//*[@id="rightPanel"]/div/div/h1',

         accOverviewLink: '//*[@id="leftPanel"]/ul/li[2]/a',
         
         accNo: '//*[@id="accountTable"]/tbody/tr[1]/td[1]/a',
         accDetails: '//*[@id="rightPanel"]/div/div[1]',
         accActivity: '//*[@id="rightPanel"]/div/div[2]/h1',
         activityPeriod: '//*[@id="month"]/option[4]',
         accType: '//*[@id="transactionType"]/option[3]',
         goBtn: '//*[@id="rightPanel"]/div/div[2]/form/table/tbody/tr[3]/td[2]/input',
         msg: '//*[@id="rightPanel"]/div/div[2]/p/b',

         paybillLink: '//*[@id="leftPanel"]/ul/li[4]/a',
         billPayServiceHeader: '//*[@id="rightPanel"]/div/div[1]/h1',
         payeeInfo: '//*[@id="rightPanel"]/div/div[1]/p',
         payeeName: by.name("payee.name"),
         payAdd: by.name("payee.address.street"),
         payCity: by.name("payee.address.city"),
         payState: by.name("payee.address.state"),
         payZip: by.name("payee.address.zipCode"),
         payPhNo: by.name("payee.phoneNumber"),
         payAcc: by.name("payee.accountNumber"),
         payVerifyAcc: by.name("verifyAccount"),
         payAmt: by.name("amount"),
         fromAcc: '//*[@id="rightPanel"]/div/div[1]/form/table/tbody/tr[13]/td[2]/select/option[3]',
         sendPayBtn: '//*[@id="rightPanel"]/div/div[1]/form/table/tbody/tr[14]/td[2]/input',
         paycompleteMsg: '//*[@id="rightPanel"]/div/div[2]/h1',
    },

clickElement: async function (objectKey) { // LoginButton
    // eslint-disable-next-line no-console
    console.log('The objectKey  is: '+objectKey) 
    const selector = this.elements[objectKey];
    console.log('The xpath expression is: '+selector)  //*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a
    await driver.sleep(3000);
    return driver.findElement(By.xpath(selector)).click();
},

inputElement: async function (inputName, inputValue) { // username or password
    const selector = this.elements[inputName];
    await driver.sleep(3000);
    return driver.findElement(selector).sendKeys(inputValue);
   
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
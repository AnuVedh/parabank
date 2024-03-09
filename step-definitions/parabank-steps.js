const helpers = require("../runtime/helpers");

module.exports = function () {

    this.Given(/^I am on the "([^"]*)" website$/, function (objectKey) {
        console.log('The objectKey is: ' + page.parabank[objectKey])
        return helpers.loadPage(page.parabank[objectKey]);
    });


    this.When(/^I enter inputs for login$/, function(dataTable){
        const rows=dataTable.rows();
        for(var i=0;i<rows.length;i++)
        {
            var inputname = rows[i][0]
            var inputvalue = rows[i][1]
            page.parabank.inputElement(inputname,inputvalue)
            console.log(inputvalue)
        }
        return;
    });

    this.Then(/^I click on "([^"]*)"$/, function(objectKey){
        return page.parabank.clickElement(objectKey);
    })

    this.Then(/^I Should see "([^"]*)"$/, function (objectKey) {
        console.log('The objectKey in commonsteps is: ' + objectKey)
        return page.parabank.elementExists(objectKey);
    });

    
    this.When(/^I enter inputs for customerLookUp$/, function(dataTable){
      const rows=dataTable.rows();
       
       for(var i=0;i<rows.length;i++)
        {
            var inputname = rows[i][0]
            var inputvalue = rows[i][1]
            page.parabank.inputElement(inputname,inputvalue)
          //  console.log("InputnameInputValue"+inputvalue);
    };
  //  await driver.sleep(3000)
        return;
    }); 

   
     this.When(/^I enter inputs for Registration$/, function(dataTable){
        const rows=dataTable.rows();
        for(var i=0;i<rows.length;i++)
        {
           
            var inputname = rows[i][0]
            var inputvalue = rows[i][1]
            page.parabank.inputElement(inputname,inputvalue)
            
    }
        return;
    });
   
};
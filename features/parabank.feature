Feature: As a parabank user, I want to be able to navigate to landing page so that I can view bank details

@parabank @parabankLanding
  Scenario: Customer is able to login to parabank website
    Given I am on the "parabank" website
    When I enter inputs for login
    | inputName | inputValue |
    | username | anu |
    |password | guri |
    And I click on "loginBtn"
    Then I Should see "welcome"

    @parabank @parabankInvalidlogin 
    Scenario: Customer is able to login to parabank website
    Given I am on the "parabank" website
   
    When I enter inputs for login
    | inputName | inputValue |
    | username | Jose |
    |password | Parabank |
    And I click on "loginBtn"
    Then I Should see "errorMsg"
 
        
@parabankforlog @parabankforgotlog
Scenario: Customer is able to retrive login credentials 
Given I am on the "parabank" website
When I click on "forgotLoginLink"
And I Should see "customerlookUp"
And I enter inputs for customerLookUp
           | InputName | InputValue | 
           | FirstName | John |
           | LastName | J |
           | Address | 123 |
           | City | Lombard |
           | State | IL |
           | ZipCode | 123 |
           | SSN | 1233 |
 And I click on "findLoginBtn"     
 Then I Should see "Logininfo"     


@parabankreg @parabankRegister
Scenario: Customer is able to Register 
Given I am on the "parabank" website
When I click on "registerLink"
#And I see "customerlookup"
And I enter inputs for Registration
           | InputName | InputValue | 
           | RegFirstN | Jossy |
           | RegLastN | J |
           | RegAddres | 123 |
           | Regcity | Tam |
           | Regstate | FL |
           | Regzip | 33422 |
           | Regphone | 12345678 |
           | Regssn | 12345 |
           | RegUser | Jossy |
           | RegPswd | Jackson@123 |
           | RegConfirm | Jackson@123 |
 And I click on "RegisterBtn"     
Then I Should see "welcomemsg"


@parabank @parabankOpenAcc
Scenario: Customer opens new account
Given I am on the "parabank" website
 When I enter inputs for login
| inputName | inputValue |
| username | Tracy |
| password | John |
And I click on "loginBtn"
And I Should see "accountServices"
And I click on "openNewAccLink"
And I Should see "openAccMsg"
And I click on "savings"
And I click on "openNewAccBtn"
Then I Should see "accOpenedMsg"

@parabank @parabankTransfer
Scenario: Customer is able to transfer amount 
Given I am on the "parabank" website
   # When I see "customerLogin"
When I enter inputs for login
    | inputName | inputValue |
    | username | Test |
    |password | Test@123 |
And I click on "loginBtn"
Then I Should see "welcome"
And I click on "TransferFund"
And I enter inputs for "amount" as "200"
And I click on "account1"
And I click on "account2"
And I click on "transferBtn"

@parabank @parabankAccOverview
Scenario: Customer is able to check accountActivity
Given I am on the "parabank" website
   # When I see "customerLogin"
When I enter inputs for login
    | inputName | inputValue |
    | username | Sassy  |
    |password | SasHanes |
And I click on "loginBtn"
And I Should see "accountServicesHeader"
#And I click on "accOverviewLink"
And I click on "accNo"
And I Should see "accDetails"
When I see "accActivity"
And I select on "activityPeriod"
And I select on "accType"
And I click on "goBtn"
And I Should see "msg"


@parabank @parabankPayBill
Scenario: Customer is able to pay bill
Given I am on the "parabank" website
   # When I see "customerLogin"
When I enter inputs for login
    | inputName | inputValue |
    | username | Sassy  |
    |password | SasHanes |
And I click on "loginBtn"
And I Should see "accountServicesHeader"
And I click on "paybillLink"
And I Should see "billPayServiceHeader" 
And I enter inputs for payeeInfo
            | InputName | InputValue | 
                | payeeName | Jossy |
                | payAdd | 123 |
                | payCity | Lombard |
                | payState | IL |
                | payZip | 1233 |
                | payPhNo | 12345678 |
                | payAcc | 12345 |
                | payVerifyAcc | 12345 |
                | payAmt | 1000 |
And I select on "fromAcc"
And I click on "sendPayBtn"
And I Should see "paycompleteMsg"

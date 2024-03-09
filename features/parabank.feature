Feature: As a parabank user, I want to be able to navigate to landing page so that I can view bank details

@parabank @parabankLanding
  Scenario: Customer is able to login to parabank website
    Given I am on the "parabank" website
   # When I see "customerLogin"
    When I enter inputs for login
    | inputName | inputValue |
    | username | anu |
    |password | guri |
    And I click on "loginBtn"
    Then I Should see "welcome"

    @parabank @parabankInvalidlogin 
    Scenario: Customer is able to login to parabank website
    Given I am on the "parabank" website
   # When I see "customerLogin"
    When I enter inputs for login
    | inputName | inputValue |
    | username | Jose |
    |password | Parabank@12 |
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

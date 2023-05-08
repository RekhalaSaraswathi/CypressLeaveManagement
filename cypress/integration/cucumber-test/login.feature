Feature: Login 

  Scenario: Login Successful 
    Given I am on the login page
    When User enters login details as "brad.tucker" and "wavemaker" and click signin button
    Then Verify that I am navigated to MyLeaves page

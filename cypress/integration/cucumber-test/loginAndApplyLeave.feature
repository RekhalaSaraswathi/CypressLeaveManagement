Feature: Login And Apply Leave

  Scenario: Login Successful and Apply Leave
    Given I am on the login page
    When User enters login details as "brad.tucker" and "wavemaker" and click signin button
    Then Apply leave page using "May 30, 2023" and "May 30, 2023" and 1 and "Personal" and click apply button
    Then Verify the applied leave "May 30, 2023" at index 0 successfully in the leave list
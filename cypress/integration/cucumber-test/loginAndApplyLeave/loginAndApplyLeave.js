import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import ApplyLeavePage from "../../../components/ApplyLeavePage";
import LoginPage from "../../../components/LoginPage";
import MyLeaves from '../../../components/MyLeaves';

const loginPage = new LoginPage();
const applyLeavePage = new ApplyLeavePage();
const myLeaves = new MyLeaves();

Given('I am on the login page', () => {
    loginPage.visit();
});

When('User enters login details as {string} and {string} and click signin button', (username, password) => {
    loginPage.login(username, password);
});

Then('Apply leave page using {string} and {string} and {int} and {string} and click apply button', (startDate, endDate, tenantId, leaveType) => {
    applyLeavePage.applyleave(startDate, endDate, tenantId, leaveType);
});

Then('Verify the applied leave {string} at index {int} successfully in the leave list', (text,index) => {
    myLeaves.verifyPendingLeaves('Pending', 0);
});
// write cypress test case to login and apply leave from LoginPage and ApplyLeavePage component

import LoginPage from '../components/LoginPage';
import ApplyLeavePage from '../components/ApplyLeavePage';


describe('Apply Leave Test', () => {

    it('Login and Apply Leave', () => {

        const loginPage = new LoginPage();
        const applyLeavePage = new ApplyLeavePage();

        loginPage.login('eric.lin', 'wavemaker');
        applyLeavePage.applyleave('May 30, 2023', 'May 31, 2023', '1', 'Personal');
    });
});
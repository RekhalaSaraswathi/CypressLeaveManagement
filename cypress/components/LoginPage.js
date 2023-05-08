class LoginPage {

    visit() {
        cy.visit('/#/Login');
    };

    fillUserName(value) {
        const field = cy.get('input[name="j_username"]');
        field.clear();
        field.type(value);
        return this;
    }

    fillPassword(value) {
        const field = cy.get('input[name="j_password"]');
        field.clear();
        field.type(value);
        return this;
    }

    submit() {
        const button = cy.get('button[name="loginButton"]');
        button.click();
        cy.get('button[name="loginButton"]').should('not.exist');
    }

    login(username, password) {
        this.visit();
        this.fillUserName(username);
        this.fillPassword(password);
        this.submit();
    }
}
export default LoginPage;
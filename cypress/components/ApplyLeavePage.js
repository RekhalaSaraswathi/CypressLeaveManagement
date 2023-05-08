class ApplyLeavePage {

    applyleave(startDate, endDate, tenantId, leaveType) {
        cy.visit('/#/ApplyLeave');
        // cy.get('a[aria-label="Apply_leaves"]').click();
        cy.contains('Apply Leave').should('be.visible');
        cy.get('input[name="startDate_formWidget"]').should('be.visible').clear().type(startDate, { force: true }).should('have.value', startDate);
        cy.get('input[name="endDate_formWidget"]').should('be.visible').clear().type(endDate, { force: true }).should('have.value', endDate);
        cy.get('input[name="tenantId_formWidget"]').should('be.visible').clear().type(tenantId, { force: true }).should('have.value', tenantId);
        cy.get('select[name="type_formWidget"]').select(leaveType).contains(leaveType).should('be.visible');
        cy.get('button[name="save"]').should('be.visible').and('be.enabled').click();
    }

}
export default ApplyLeavePage;
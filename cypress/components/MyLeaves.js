class MyLeaves {

    verifyPendingLeaves(text, index) {
        cy.visit("/#/MyLeaves");
        cy.get('a[title="PendingLeaves"]').click();
        //Verify Table data
        cy.get('tbody').find('tr').as('rows');
        cy.get('@rows').eq(index).find('td').as('columns');
        cy.get('@columns').contains(text).should('be.visible');
    }

    verifyApprovedLeaves(text, index) {
        cy.get('a[title="AcceptedLeaves"]').click();
        //Verify Table data
        cy.get('tbody').find('tr').as('rows');
        cy.get('@rows').eq(index).find('td').as('columns');
        cy.get('@columns').contains(text).should('be.visible');
    }

    verifyRejectedLeaves(text, index) {
        cy.get('a[title="RejectedLeaves"]').click();
        //Verify Table data
        cy.get('tbody').find('tr').as('rows');
        cy.get('@rows').eq(index).find('td').as('columns');
        cy.get('@columns').contains(text).should('be.visible');
    }
}
export default MyLeaves;
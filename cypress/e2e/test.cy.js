import { HealthPage } from "../pageObjects/HealthPage";

context('CURA Healthcare Service', () => {

    beforeEach(() => {
        HealthPage.visit();
    });

    context('Scenario 1', () => {
        it('should make an appointment', () => {
            HealthPage.makeAppointmentBtn.click();

            // Login
            HealthPage.username.type('John Doe');
            HealthPage.password.type('ThisIsNotAPassword');
            HealthPage.loginBtn.click();

            HealthPage.facilitySelect.select('Seoul CURA Healthcare Center');
            HealthPage.Readmission.click();
            HealthPage.medicaid.click();

            HealthPage.visitDateInput.type('30/05/2026');
            HealthPage.confirmation.click({ force: true }); 

            HealthPage.comment.type('CURA Healthcare Service Test MD2');
            HealthPage.bookBtn.click();

            // Validācija
            HealthPage.confirmation.should('contain', 'Appointment Confirmation');
            HealthPage.facility.should('have.text', 'Seoul CURA Healthcare Center');
        });
    });

    context('Scenario 2 ', () => {
        it('history is empty', () => {
            HealthPage.makeAppointmentBtn.click();

            // Login
            HealthPage.username.type('John Doe');
            HealthPage.password.type('ThisIsNotAPassword');
            HealthPage.loginBtn.click();


            HealthPage.menuBtn.click();
            HealthPage.sidebar.should('have.class', 'active');
            HealthPage.history.click();

            // Validācija
            HealthPage.noAppoint.should('be.visible');
        });
    });

});
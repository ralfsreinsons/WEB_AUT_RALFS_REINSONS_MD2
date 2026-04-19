import { BasePage } from "./BasePage";

export class HealthPage extends BasePage {
    static get makeAppointmentBtn() {
        return cy.get('#btn-make-appointment');
    }


    static get password() {
        return cy.get('#txt-password');

    }


    static get username() {
        return cy.get('#txt-username');

    }


    static get loginBtn() {
        return cy.get('#btn-login');

    }

    static get facilitySelect() {
        return cy.get('#combo_facility');

    }

    static get Readmission() {
        return cy.get('#chk_hospotal_readmission');

    }

    static get medicaid() {
        return cy.get('#radio_program_medicaid');

    }

    static get visitDateInput() {
        return cy.get('#txt_visit_date');

    }

    static get comment() {

        return cy.get('#txt_comment');
    }


    static get bookBtn() {
        return cy.get('#btn-book-appointment');

    }

    static get confirmation() {
        return cy.get('h2');

    }

    static get facility() {
        return cy.get('#facility');

    }

static get menuBtn() {
        return cy.get('#menu-toggle');
    }

    static get sidebar() {

        return cy.get('#sidebar-wrapper');
    }

    static get history() {

        return cy.get('a[href="history.php#history"]');
    }

    static get noAppoint() {

        return cy.get('p').contains('No appointment');
    }

}
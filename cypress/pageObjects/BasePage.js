export class BasePage {
    static get baseUrl() {
        return "https://katalon-demo-cura.herokuapp.com";
    }

    static visit() {
        cy.visit(this.baseUrl);
    }
}
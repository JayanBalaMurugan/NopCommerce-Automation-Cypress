import 'cypress-iframe';
import 'cypress-file-upload';
import Login from "/cypress/PageObject/NopCommerce.js";
import "/cypress/support/NopCommerceCmds.js";

describe(' NopCommerce Automation Tesing', () => {
    let Inputdata, Selector;
    before('Login', () => {
        cy.fixture('NopCommerceInputData.json').then((userdata) => {
            Inputdata = userdata;
        });
        cy.fixture('NopCommerceSelector.json').then((userdata1) => {
            Selector = userdata1;
        });
    });
    const obj = new Login();
    beforeEach('Login', () => {
        obj.visitpage(Selector, Inputdata);
    });
    it('TestCase : 1 : Verify the ability to login - Valid Credentials.', () => {
        cy.ValidLogin(Selector, Inputdata);
    });
    it('TestCase : 2 : Verify the ability to login - Inalid Credentials.', () => {
        cy.InValidLogin(Selector, Inputdata);
    });
    it('TestCase : 3 :Verify the ability to login - Empty field.', () => {
        cy.EmptyFieldsLogin(Selector, Inputdata);
    });
    it('TestCase : 4 : Verify the ability to use the Admin search box.', () => {
        cy.ValidLogin(Selector, Inputdata);
        cy.AdminSearch(Selector, Inputdata);
    });
    it('TestCase : 5 : Verify that the product childtab is working properly.', () => {
        cy.ValidLogin(Selector, Inputdata);
        cy.ProductPage(Selector, Inputdata);
        cy.ProductChildTab(Selector, Inputdata);
    });
    it("TestCase : 6 : Verify that the product list table view is scrollable and 'back to top' button is working properly.", () => {
        cy.ValidLogin(Selector, Inputdata);
        cy.ProductPage(Selector, Inputdata);
        cy.BacktoTopBtn(Selector, Inputdata);
    });
    it("TestCase : 7 : Verify that the product search functionality - Search using the product name and the drop-down.", () => {
        cy.ValidLogin(Selector, Inputdata);
        cy.ProductPage(Selector, Inputdata);
        cy.ProductNameSearch(Selector, Inputdata);
    });
    it('TestCase : 8 : Verify that the page navigation buttons are working properly.', () => {
        cy.ValidLogin(Selector, Inputdata);
        cy.ProductPage(Selector, Inputdata);
        cy.PageNavigationBtn(Selector, Inputdata);
    });
    it('TestCase : 9 : Verify the pagination for the total number of product items.', () => {
        cy.ValidLogin(Selector, Inputdata);
        cy.ProductPage(Selector, Inputdata);
        cy.Product_Total_Items(Selector, Inputdata);
    });
    it('TestCase : 10 : Verify that the Product table grid lenth visibility and functionality.', () => {
        cy.ValidLogin(Selector, Inputdata);
        cy.ProductPage(Selector, Inputdata);
        cy.TableGridLenth(Selector, Inputdata);
    });
    it('TestCase : 11 : Verify the length of the table columns and print the column names in the table header.', () => {
        cy.ValidLogin(Selector, Inputdata);
        cy.ProductPage(Selector, Inputdata);
        cy.TableHeadername(Selector, Inputdata);
    });
    it("TestCase : 12 : Verify that the Categories functionality allows for adding a category description in an iFrame and uploading images.", () => {
        cy.ValidLogin(Selector, Inputdata);
        cy.CategoriesPage(Selector, Inputdata);
        cy.CategoriesAdd(Selector, Inputdata);
    });
    it(' TestCase : 13 : Verify the logout functionality.', () => {
        cy.ValidLogin(Selector, Inputdata);
        cy.Logout(Selector, Inputdata);
    });
});

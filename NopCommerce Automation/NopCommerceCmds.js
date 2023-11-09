Cypress.Commands.add('ValidLogin', (Selector, Inputdata) => {
    cy.get(Selector.Email).clear().type(Inputdata.ValidEmail);
    cy.get(Selector.Password).clear().type(Inputdata.ValidPassword);
    cy.get(Selector.LoginBtn).click();
    cy.get(Selector.ContentHeader).should('contain', Inputdata.HeaderAssertion);
});
Cypress.Commands.add('InValidLogin', (Selector, Inputdata) => {
    cy.get(Selector.Email).clear().type(Inputdata.InValidEmail);
    cy.get(Selector.Password).clear().type(Inputdata.InValidPassword);
    cy.get(Selector.LoginBtn).click();
    cy.get(Selector.InValidLoginError).should('contain', Inputdata.InValidLoginErrorAssertion);
});
Cypress.Commands.add('EmptyFieldsLogin', (Selector, Inputdata) => {
    cy.get(Selector.Email).click().clear();
    cy.get(Selector.Password).clear()
    cy.get(Selector.LoginBtn).click();
    cy.get(Selector.EmailAlert).should('contain', Inputdata.EmailAlertAssertion);
});
Cypress.Commands.add('AdminSearch', (Selector, Inputdata) => {
    cy.get(Selector.AdminSearchBox).should('not.be.visible');
    cy.get(Selector.NavBar).click();
    cy.get(Selector.AdminSearchBox).click().type(Inputdata.CategoriesModule);
    cy.get(Selector.ModuleList).should('have.length', Inputdata.ModuleListLength);
    cy.get(Selector.ModuleName).click({ force: true });
});
Cypress.Commands.add('ProductPage', (Selector, Inputdata) => {
    cy.get(Selector.SideBarPusher).click();
    cy.get(Selector.Catelog).click();
    cy.get(Selector.Product).click();
    cy.get(Selector.ProductBreadCrums).should('contain', Inputdata.ProductsAssertion);
});
Cypress.Commands.add('ProductChildTab', (Selector, Inputdata) => {
    cy.get(Selector.ProductTag).should('contain', Inputdata.ProductsAssertion);
    cy.get(Selector.ProductChildWindow)
        .invoke('removeAttr', Inputdata.RemoveChildTabLink)
        .click({ force: true })
        .should('have.attr', 'href', Inputdata.ProductChildTabLink);
});
Cypress.Commands.add('BacktoTopBtn', (Selector, Inputdata) => {
    cy.get(Selector.CameraImage).scrollIntoView({ duration: 2000 });
    cy.get(Selector.CameraImage).should('be.visible');
    cy.get(Selector.backTopBtn).click();
    cy.get(Selector.ProductTag).should('contain', Inputdata.ProductsAssertion);
    cy.get(Selector.backTopBtnInvisible).should('not.be.visible');
});
Cypress.Commands.add('ProductNameSearch', (Selector, Inputdata) => {
    cy.get(Selector.SearchProductName).type(Inputdata.ProductName);
    cy.get(Selector.SearchCategoryId).select(Inputdata.SelectProductCategoryId).should('contain', Inputdata.ProductCategoryId)
    cy.get(Selector.ProductSearchBtn).click();
    cy.get(Selector.ProductListTable).eq(2).should('have.text', Inputdata.ProductName);
    cy.get(Selector.ProductListLength).should('have.length', Inputdata.SearchItemLength);
});
Cypress.Commands.add('PageNavigationBtn', (Selector, Inputdata) => {
    cy.get(Selector.Pagination).scrollIntoView();
    cy.get(Selector.PaginationBtn1).should('contain', Inputdata.PaginationBtn1Value);
    cy.get(Selector.PaginationBtn2).click();
    cy.get(Selector.PaginationBtn2).should('contain', Inputdata.PaginationBtn2Value);
});
Cypress.Commands.add('Product_Total_Items', (Selector, Inputdata) => {
    let Totalitems;
    cy.get(Selector.DataTableInfo).scrollIntoView().should(($el) => {
        let myText = $el.text();
        let start = myText.lastIndexOf('of') + 3;
        let end = myText.lastIndexOf('items') - 1;
        Totalitems = myText.substring(start, end).trim();
        expect(Totalitems).to.not.be.empty;
    }).then(() => {
        cy.log(Inputdata.TableTotalCount + Totalitems);
    });
});
Cypress.Commands.add('TableGridLenth', (Selector, Inputdata) => {
    cy.get(Selector.TableGridLength).scrollIntoView().should('contain', Inputdata.TableGridAssertion);
    let e1;
    cy.get(Selector.SelectProductsGridLength).then(($select) => {
        e1 = $select.val();
    }).then(() => {
        cy.get(Selector.SelectProductsGridLength).select(e1).should('contain', e1);
        cy.get(Selector.TableTotalRow).should('have.length', e1);
    });
});
Cypress.Commands.add('TableHeadername', (Selector, Inputdata) => {
    cy.get(Selector.TableColumnHeader).each(($el, index, $list) => {
        cy.log($el.text());
    }).then(($list) => {
        cy.log(Inputdata.TableTotalColumns + $list.length);
    });
});
Cypress.Commands.add('CategoriesPage', (Selector, Inputdata) => {
    cy.get(Selector.SideBarPusher).click();
    cy.get(Selector.Categories).click();
    cy.get(Selector.CategoriesLink).click();
    cy.get(Selector.CategoriesTag).should('contain', Inputdata.CategoriesAssertion);
});
Cypress.Commands.add('CategoriesAdd', (Selector, Inputdata) => {
    cy.get(Selector.CategoriesBtn).click();
    cy.get(Selector.CategoriesTag).should('contain', Inputdata.CategoriesTagAssertion);
    cy.get(Selector.CategoryName).type(Inputdata.CategoryNameValue);
    cy.frameLoaded(Selector.IFrameLoad);
    cy.iframe(Selector.IFrameLoad).type(Inputdata.AddIFrameDescription);
    cy.get(Selector.CategoryDropDown).select(Inputdata.CategoryDropDownOption).should('contain', Inputdata.CategoryDropDownValue);
    cy.get(Selector.CategoryImgUpload).attachFile(Inputdata.ImgFile);
    cy.get(Selector.CategoryUploadedImg).should('be.visible');
    cy.get(Selector.CategoryCheckBox).check().should('be.checked');
    cy.get(Selector.CategorySaveBtn).click();
    cy.get(Selector.NewAddCategory).should('contain', Inputdata.NewAddCategoryAssertion)
    cy.get(Selector.CategoryDeleteCheckBox).check().should('be.checked');
    cy.get(Selector.CategoryDeleteBtn).click();
    cy.on('window:confirm', () => true);
    cy.get(Selector.ConfirmDeleteBtn).click({ force: true });
});
Cypress.Commands.add('Logout', (Selector, Inputdata) => {
    cy.get(Selector.LogoutLink).should('have.text', Inputdata.LogoutAssertion).click();
    cy.get(Selector.PageTitle).should('have.text', Inputdata.TitleAssertion);
});

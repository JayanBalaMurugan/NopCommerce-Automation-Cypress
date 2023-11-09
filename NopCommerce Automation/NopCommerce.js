class Login {
    visitpage(Selector, Inputdata) {
        cy.visit(Inputdata.PageLink);
        cy.get(Selector.PageTitle).should('have.text', Inputdata.TitleAssertion);
    };
};
export default Login;
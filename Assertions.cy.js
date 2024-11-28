
describe('Assertions demo', () =>{
    it('Implicit assertions', ()=> {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.url().should('include', 'orangehrmlive')
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('contain', 'orangehrmlive')

    cy.url().should('include','orangehrmlive')
    .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .should('contain','orangehrmlive')

    cy.url().should('include', 'orangehrmlive')
    .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .and('contain', 'orangehrmlive')
    .and('not.contain', 'green')

    //css selector - img[alt=company-branding] - tag+[attribute]
    cy.title().should('eq','OrangeHRM').and('include','Orange').and('contain','HRM')
    cy.get("img[alt='company-branding']").should('be.visible').and('exist')
    cy.xpath('//a').should('have.length', 5)
    cy.xpath('//button').should('have.length', 1)


    cy.get("input[placeholder='Username']").type('Admin')
    cy.get("input[placeholder='Username']").should('have.value', 'Admin')
    cy.get("input[placeholder='Password']").type('admin123')
    cy.get("button[type='submit']").click()
    cy.get('.oxd-userdropdown-name').should('have.text', 'manda user')
    
})

    it('Explicit assertions', ()=> {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()

        const expectedName = 'manda user'  ////let, const var

        cy.get('.oxd-userdropdown-name').then( (x)=> {

        let actualName = x.text()

        //Assertion in BDD approach

        expect(actualName).to.equal(expectedName)
        //expect(actualName).to.not.equal(expectedName)

        //Assertion in TDD approach
        assert.equal(actualName, expectedName)
        //assert.notequal(actualName, expectedName)
        })
    })
})

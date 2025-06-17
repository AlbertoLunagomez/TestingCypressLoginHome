describe('REST API TEST WITH CYPRESS', function() {
    it('API Test-Header Validation', function(){
        cy.request('https://pokeapi.co/api/v2/pokemon/33/').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')
    })

    it('API Test-Status Validation', function(){
        cy.request('https://pokeapi.co/api/v2/pokemon/33/').as('pokemon')
        cy.get('@pokemon').its('status')
            .should('equal', 200)
    })

    it('API Test-Validate Name Value', function(){
        cy.request('https://pokeapi.co/api/v2/pokemon/33/').as('pokemon')
        cy.get('@pokemon').its('body')
            .should('include', {name:'nidorino'})
    })
})

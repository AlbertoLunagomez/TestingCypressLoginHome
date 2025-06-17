describe('REST API TEST WITH CYPRESS', function() {
    let baseUrl;
    let pokemonId;

    beforeEach(() => {
        cy.fixture('pokemons').as('pokemon');
        baseUrl = Cypress.env('api_base_url');
        cy.get('@pokemon').then((pokemon) => {
            pokemonId = pokemon.valid.pokemonId;

            cy.request({
            method: 'GET',
            url: `${baseUrl}/pokemon/${pokemonId}/`,
            failOnStatusCode: false,
            }).as('pokemonRequest');
        });
    });

    it('API Test-Header Validation', function(){
        cy.get('@pokemonRequest').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')
    })

    it('API Test-Status Validation', function(){
        cy.get('@pokemonRequest').its('status')
            .should('equal', 200)
    })

    it('API Test-Validate Name Value', function(){
        cy.get('@pokemonRequest').its('body')
            .should('include', {name:'nidorino'})
    })

    it('API Test-404 Status Validation', function(){
        pokemonId = this.pokemon.invalid.pokemonId;
        cy.request({
            method: 'GET',
            url: `${baseUrl}/pokemon/${pokemonId}/`,
            failOnStatusCode: false,
        }).as('pokemonRequest')
        cy.get('@pokemonRequest').its('status')
        .should('equal', 404);
    })
})

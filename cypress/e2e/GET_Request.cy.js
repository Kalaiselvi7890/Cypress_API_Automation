describe('GET',()=>{
it('GET',()=>{
    cy.request( 'GET', 'https://rahulshettyacademy.com').
    its('status').should('equal',200);
 })
})

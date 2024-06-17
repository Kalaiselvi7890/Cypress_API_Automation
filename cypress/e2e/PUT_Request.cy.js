

describe('PUT',()=>{
    it('PUT',()=>{
        cy.request({
            method:'PUT',
            url:'https://rahulshettyacademy.com/maps/api/place/update/json',
            body:("{\n" +
            "\t    \"name\": \"xxxxx\",\n" +
             "  \"address\": \"trichy\",\n" +
            "\n" +
            "}")
           }).its('status').should('equal',200)
    })
})
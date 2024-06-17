

describe('DELETE',()=>{
    it('DELETE',()=>{
    cy.request({
        method : 'DELETE',
        url : 'https://rahulshettyacademy.com/maps/api/place/delete/json',
        body: ("{\n" +
        "\t    \"name\": \"xxxxx\",\n" +
       
        "\n" +
        "}")
    })
})})
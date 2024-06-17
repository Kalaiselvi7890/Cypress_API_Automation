

describe('queryparam',()=>{
    it('queryparam',()=>{
        cy.request({
            Method:'GET',
            url :'https://reqres.in/api/users?page=2',
            qs  : {page : 2}
             }).then(response=>{
             expect(response.status).to.eq(200);
             expect(response.body.page).to.eq(2);
             expect(response.body.data).has.length(6);
            expect(response.body.data[0]).have.property("id",7);
            expect(response.body.data[1]).have.property("id",8);
            expect(response.body.data[2]).have.property("email","tobias.funke@reqres.in");
        })
})
})
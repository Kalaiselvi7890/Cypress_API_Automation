

describe('Digest_Auth',()=>{
    it('Digest Auth',()=>{
        cy.request({
            method : 'GET',
            url :'http://the-internet.herokuapp.com/basic_auth',
            auth:{username :'admin',
                  password :'admin',
                method :'Digest' }
          }).then((response)=>{
            expect(response.status).to.eq(200);
          })
    })
})
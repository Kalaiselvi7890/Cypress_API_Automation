


describe('Basic auth',()=>{
    it('Basic auth', ()=>{
        cy.request({
            method : 'GET',
            url :'http://the-internet.herokuapp.com/basic_auth',
            auth:{username :'admin',
                  password :'admin' }
          }).then((response)=>{
            expect(response.status).to.eq(200);
          })
    })
})
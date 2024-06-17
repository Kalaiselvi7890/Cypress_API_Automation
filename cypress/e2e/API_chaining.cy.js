

describe('API chaining',()=>{
      const auth_token='Bearer e4600d06518a082d1c762b0518ed07dcf20b3bfed0f8d474da9d2619ab5e8ed3';
      const userid=null;
    it('POST',()=>{
       cy.request({
            method :'POST',
            url :'https://gorest.co.in/public/v2/users',
            body :
                {
                    name:Math.random().toString(5).substring(2),
                    gender:"female",
                    email:"kalai"+Math.random().toString(5).substring(2)+"@gmail.com",
                    status:"inactive"
                 } ,
    headers :{
                Authorization :auth_token
            },
        }).then((response)=>{
            expect(response.status).to.eq(201)
          const userid= response.body.id
        
     cy.request({
            method :'PUT',
            url :'https://gorest.co.in/public/v2/users/'+userid,
            body:{
                name:"hasdhe"
            },
            headers :{
                Authorization :auth_token
            },
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq('hasdhe')
       cy.request({method :'GET',
       url :'https://gorest.co.in/public/v2/users/'+userid,
      
       headers :{
           Authorization :auth_token
       },}).then((response)=>{
        expect(response.status).to.eq(200)
       }) 
        cy.request({
            method:'DELETE',
            url:'https://gorest.co.in/public/v2/users/'+userid,
            headers :{
                Authorization :auth_token
            },

        }).then(response=>{
            expect(response.status).to.eq(204)
        })
    }) 
})
})})
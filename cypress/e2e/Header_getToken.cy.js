


describe('header',()=>{
    
    
    //Get Token using headers
    let authtoken=null;
    before('header',()=>{
       cy.request({
            method : 'POST', 
            url:'https://simple-books-api.glitch.me/api-clients',
     headers :{'content-Type':'application/json'},
           body :
                { clientName: "safd",
                   clientEmail: Math.random().toString(5).substring(2)+"@gmail.com"
                }
             }).then((response)=>{
            authtoken= response.body.accessToken;
            console.log(authtoken)
        }); });


//Create order using Bearer token
        it('creating order',()=>{
             cy.request({
            method : 'POST', 
            url:'https://simple-books-api.glitch.me/orders/',
        headers :{'content-Type':'application/json',
                      'Authorization':'Bearer '+authtoken},
           body :
                { 
                    bookId : 5,
                    customerName:"raja"
                 }
             }).then((response)=>{
                expect(response.status).to.eq(201);
                expect(response.body.created).to.eq(true);
             })
    })

//Get the orders which is created under Bearer token & add the cookies
    it('fetch the order',()=>{
        cy.request({
            method : 'GET', 
            url:'https://simple-books-api.glitch.me/orders/',
        headers :{'content-Type':'application/json',
                      'Authorization':'Bearer '+authtoken},
            cookies:{'cookieName':'mycookie'},
        
             }).then((response)=>{
                expect(response.status).to.eq(200);
                let len=response.body.length
               expect(response.body).have.length(len);
             })
    })
})
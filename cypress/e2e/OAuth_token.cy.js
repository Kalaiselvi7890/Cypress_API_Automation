

describe('oauth',()=>{
    let accesstoken='';
    before('oath',()=>{
        cy.request({
            method :'POST',
            url :'https://github.com/login/oauth/access_token',
            qs :{client_id :'Ov23liLgoWDwsQQ83voI',
            client_secret :'d72b091559fe3d40c7aee16526bf932642eb0ab8',
            code :'29ddb2764bd39c11ca90'}
                }) .then((response)=>{
                    let body = response.body;
                    let params = body.split('&');
                    accesstoken = params[0].split('=')[1]; // Extracting the access_token value
                    cy.log("Access Token: " + accesstoken);
            })
            
          //console.log(accesstoken)
          cy.log(accesstoken)
            }) 
            it('Oauth2.0',()=>{
                cy.log(accesstoken)
               cy.request({
                method : 'GET',
                url :'https://api.github.com/user/repos',
                headers: {
                    Authorization: 'Bearer '+ accesstoken
                }
               }).then((response)=>{
               expect(response.status).to.eq(200)
               })
            })
        })
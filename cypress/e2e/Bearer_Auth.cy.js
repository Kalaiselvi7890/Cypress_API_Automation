

describe('Bearer auth',()=>{
   const Token= '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'
    it('Bearer auth', ()=>{
  cy.request({
            method : "GET",
            url : 'https://github.com/kalaisevieee94?tab=repositories',
            headers :{
                Authorization:'Bearer '+Token
            }
  }).then((response)=>{
    expect(response.status).to.eq(200)
  })
})
})



describe('json_object',()=>{
    it('hardcoded data',()=>{
        const requestedbody=
            "{\n" +
            "  \"location\": {\n" +
            "    \"lat\": -38.383494,\n" +
            "    \"lng\": 33.427362\n" +
            "  },\n" +
            "  \"accuracy\": 50,\n" +
            "  \"name\": \"selvi\",\n" +
            "  \"phone_number\": \"(+91) 983 893 3937\",\n" +
            "  \"address\": \"29, side layout, cohen 09\",\n" +
            "  \"types\": [\n" +
            "    \"shoe park\",\n" +
            "    \"Hotel\"\n" +
            "  ],\n" +
            "  \"website\": \"http://facebook.com\",\n" +
            "  \"language\": \"French-IN\"\n" +
            "}\n"
            let resposedata;
            cy.fixture('example.json').then((data)=>{
                resposedata=data;
            })
        
        cy.request({
            Method : 'POST',
            url : 'https://rahulshettyacademy.com/maps/api/place/add/json',
            body: requestedbody }).then(reponse=>{
               expect( reponse.status).to.eq(200);
               expect(reponse.body.status).to.eq(resposedata.status);
               //expect(response.body).to.eq("APP");
               //expect(response.body.place_id).to.eq("65fc6ffd394e56fc35d8cac4e075869a")
            
               })
    })
})
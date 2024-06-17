const { url } = require("inspector");


describe('POST',()=>{
    it('POST',()=>{
cy.request({
    method : 'POST',
    url    : 'https://rahulshettyacademy.com/maps/api/place/add/json',
    body   :("{\n" +
    "  \"location\": {\n" +
    "    \"lat\": -38.383494,\n" +
    "    \"lng\": 33.427362\n" +
    "  },\n" +
    "  \"accuracy\": 50,\n" +
    "  \"name\": \"xxxxx\",\n" +
    "  \"phone_number\": \"(+91) 983 893 3937\",\n" +
    "  \"address\": \"29, side layout, cohen 09\",\n" +
    "  \"types\": [\n" +
    "    \"shoe park\",\n" +
    "    \"Hotel\"\n" +
    "  ],\n" +
    "  \"website\": \"http://google.com\",\n" +
    "  \"language\": \"French-IN\"\n" +
    "}\n")
}).its('status').should('equal', 200)
    })
})
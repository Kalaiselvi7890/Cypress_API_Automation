

describe('validating response',()=>{
    let Totalprice=null;
    it('validate body',()=>{
        cy.request({
            method :'GET',
            url  :'https://fakestoreapi.com/products/',
            qs : {limit :5}
     }).then((response)=>{
        expect(response.status).to.eq(200);
        expect(response.body[0].id).to.eq(1);
        expect(response.body[0].title).to.eq("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
        expect(response.body[0].price).to.eq(109.95)
        expect(response.body[0].description).to.equal("Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday")
        expect(response.body[0].category).to.equal("men's clothing")
        expect(response.body[0].rating.rate).to.equal(3.9)
        //get the total price
       response.body.forEach(element => {
            Totalprice= Totalprice+ element.price;
        });
        expect(Totalprice).to.equal(899.23)
         })
}) })
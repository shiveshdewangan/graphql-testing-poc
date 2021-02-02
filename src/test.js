// const chai = require("chai");
// const expect = chai.expect;
const url = `http://localhost:4000`;
const request = require("supertest")(url);


describe("GraphQL POC", () => {
  it("TC001 - GraphQL Test", () => {
    request
      .post("/")
      .send({
        query: `query {
  	        name
            city
            country
      }`,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return err;
        expect(res.body.data.name).toBeString("Shivesh");
        expect(res.body.data.city).toBeString("Sydney");
        expect(res.body.data.country).toBeString("Australia");
        
        

      });
  });

  it("TC002 - Simple Test", () => {
    expect(1).toBe(1)
  });

  
});

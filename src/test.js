const chai = require("chai");
const expect = chai.expect;
const url = `http://localhost:4000`;
const request = require("supertest")(url);

describe("GraphQL POC", () => {
  it.skip("TC001 - GraphQL Test", () => {
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
        console.log("res ", res);
        expect(res.body.data.name).to.equal("Shivesh");
        expect(res.body.data.city).to.equal("Sydney");
        expect(res.body.data.country).to.equal("Australia");
      });
  });
  it.skip("TC002 - Simple Test", () => {
    expect(true).to.equal(true);
  });
});

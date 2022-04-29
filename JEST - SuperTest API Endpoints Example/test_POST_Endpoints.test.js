const request = require("supertest");
const app = require("./app");

let endpoint = "http://localhost:3333/api/v1"

describe(`TESTING ENDPOINT: POST ${endpoint}/name`, () => {
    
    it("It should work correctly", async () => {
        const response = await request(app).post("/api/v1/name")
            .set('content-type', 'application/x-www-form-urlencoded')
            .set('Accept', 'application/x-www-form-urlencoded')
            .send({
                rule_type: "daily",
                rule_id: "dc87c46d-3a89-4407-9cc9-b1a681bc0b07"
            });

        // console.log(response)
        
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body).toStrictEqual({
            status: 'success', 
            about: 'created name!' 
        })
    });
});
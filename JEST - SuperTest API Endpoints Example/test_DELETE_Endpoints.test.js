const request = require("supertest");
const app = require("./app");

let endpoint = "http://localhost:3333/api/v1"

describe(`TESTING ENDPOINT: DELETE ${endpoint}/rule`, () => {
    
    it("It should return 200 HTTP Status Code, with success json response", async () => {
        let rule_type = 'daily'
        let rule_id = "dc87c46d-3a89-4407-9cc9-b1a681bc0b07"

        const response = await request(app).delete("/api/v1/rule")
            .set('content-type', 'application/x-www-form-urlencoded')
            .set('Accept', 'application/x-www-form-urlencoded')
            .send({
                rule_type,
                rule_id
            });

        // console.log(response)
        
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body).toStrictEqual({
            status: "DELETED RULE!",
            rule_type,
            rule_id
        })
    });
});
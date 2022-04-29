const request = require("supertest");
const app = require("./app");

describe("TESTING ENDPOINT: GET /api/v1/test", () => {
    it("It should response the GET method", async () => {
        const response = await request(app).get("/api/v1/test");
        
        expect(response.statusCode).toBe(200);
    });

    it("it should ", async () => {
        const response = await request(app).get("/api/v1/test");

        expect(response.statusCode).toEqual(200);
        // expect(response.body.name).toEqual("Sofia Trindade");
        // expect(response.body).toEqual("The user was not found");
        // expect(response.body).toHaveProperty('post');
        // expect(res.body.post).toHaveProperty('title', 'updated title');
    })
});
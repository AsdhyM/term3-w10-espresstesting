const {app} = require("../src/server");
const request = require("supertest"); 

describe("Root route works", () => {
    test("Server returs a 'Hello world!' message", async () => {
        // make a request to "/" route
        // wait for response and store it
        const response = await request(app).get("/");

        // check the body of the response for a "Hello world!" string
        expect(response.body.message).toBe("Hello world!");
    });
});
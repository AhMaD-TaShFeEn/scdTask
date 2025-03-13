const request = require('supertest');
const app = require('./index.js');

describe('GET /', () => {
    test('should respond with Hello World!', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello World!');
    });
});

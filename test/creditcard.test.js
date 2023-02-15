const request = require('supertest');
const app = require('../app');

describe('Credit card API', () => {
  describe('POST /add-card', () => {
    it('should create a new credit card with a zero balance', async () => {
      const response = await request(app)
        .post('/add-card')
        .send({
          name: 'John Doe',
          cardNumber: '4111111111111111',
          limit: 1000
        })
        .set('Accept', 'application/json');

      expect(response.status).toBe(200);
    });

    it('should return an error for invalid card numbers', async () => {
      const response = await request(app)
        .post('/add-card')
        .send({
          name: 'John Doe',
          cardNumber: '1234',
          limit: 1000
        })
        .set('Accept', 'application/json');

      expect(response.status).toBe(401);
    });
  });

  describe('GET /get-all-cards', () => {
    it('should return all credit cards', async () => {
      const response = await request(app)
        .get('/get-all-cards')
        .set('Accept', 'application/json');
      expect(response.status).toBe(200);
      expect(response.type).toEqual('application/json');
    });
  });
});



const app = require('../src/app');
const request = require('supertest');
describe('Test example', () => {
  describe('GET /api/v1/exampleRoute', () => {
    let response;
    beforeEach(async () => {
      response = await request(app).get('/api/v1/exampleRoute').send();
    });

    it('Route works', async () => {
      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toContain('json');
      expect(response.body.data).toBe('Get Examples');
    });
  });

  describe('POST /api/v1/exampleRoute', () => {
    let response;
    beforeEach(async () => {
      response = await request(app).post('/api/v1/exampleRoute').send();
    });

    it('Route works', async () => {
      expect(response.status).toBe(201);
      expect(response.headers['content-type']).toContain('json');
      expect(response.body.data).toBe('Create Example');
    });
  });

  describe('PATCH /api/v1/exampleRoute', () => {
    let response;
    beforeEach(async () => {
      response = await request(app).patch('/api/v1/exampleRoute/12345').send();
    });

    it('Route works', async () => {
      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toContain('json');
      expect(response.body.data).toBe('Update Example');
    });
  });

  describe('DELETE /api/v1/exampleRoute', () => {
    let response;
    beforeEach(async () => {
      response = await request(app).patch('/api/v1/exampleRoute/12345').send();
    });

    it('Route works', async () => {
      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toContain('json');
      expect(response.body.data).toBe('Update Example');
    });
  });

  describe('GET ONE /api/v1/exampleRoute', () => {
    let response;
    beforeEach(async () => {
      response = await request(app).get('/api/v1/exampleRoute/12345').send();
    });

    it('Route works', async () => {
      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toContain('json');
      expect(response.body.data).toBe('Get Example by Id');
    });
  });
});

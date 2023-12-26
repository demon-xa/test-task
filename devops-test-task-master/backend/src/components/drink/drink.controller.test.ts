import { agent as request } from 'supertest';
import httpStatus from 'http-status';
import app from '@app';

// mock api key middleware to pass the test
jest.mock('@core/middlewares/apiKey.middleware', () =>
  jest.fn((req: Request, res: Response, next) => next()),
);

describe('Drink API', () => {
  describe('List Drinks [GET] /drinks', () => {
    test('should return 200 status if user created successfully', async () => {
      await request(app).get('/api/drinks').expect(httpStatus.OK);
    });
  });
});

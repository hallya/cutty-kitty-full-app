import API from './api';
import mockCat from '../../__mock__/cats.json';

describe('Api', () => {
  it('should fetch cats json', async () => {
    jest.spyOn(window, 'fetch').mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve(mockCat)
      };
      return Promise.resolve(fetchResponse);
    });

    API.getCats().then((data) => {
      expect(data).toBe(mockCat);
    });
  });
});
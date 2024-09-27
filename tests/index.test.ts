import { fetchData } from '../src';

test('fetchData returns data from API', async () => {
  const data = await fetchData('https://jsonplaceholder.typicode.com/posts/1');
  expect(data).toHaveProperty('id', 1);
});

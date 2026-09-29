import { MockAggregatorAdapter } from '../mock-adapter';

export function createZomatoAdapter() {
  if (process.env.ZOMATO_MOCK_MODE !== 'false') return new MockAggregatorAdapter('zomato');

  throw new Error(
    'Zomato production connector is awaiting official credentials and provider documentation.',
  );
}

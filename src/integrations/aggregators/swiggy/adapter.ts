import { MockAggregatorAdapter } from '../mock-adapter';

export function createSwiggyAdapter() {
  if (process.env.SWIGGY_MOCK_MODE !== 'false') return new MockAggregatorAdapter('swiggy');

  throw new Error(
    'Swiggy production connector is awaiting official credentials and provider documentation.',
  );
}

import { ORDER_SOURCE } from '@/constants/enums';
import { ValidationError } from '@/lib/api/errors';

import type { AggregatorProvider, NormalizedAggregatorOrder } from './types';

export function sourceForProvider(provider: AggregatorProvider) {
  return provider === 'swiggy' ? ORDER_SOURCE.SWIGGY : ORDER_SOURCE.ZOMATO;
}

export function assertNormalizedAggregatorOrder(order: NormalizedAggregatorOrder): void {
  if (!order.externalOrderId.trim()) throw new ValidationError('External order ID is required.');
  if (!order.externalOutletId.trim()) throw new ValidationError('External outlet ID is required.');
  if (order.items.length === 0) throw new ValidationError('Aggregator order must contain at least one item.');
  if (order.grandTotalMinor < 0) throw new ValidationError('Aggregator order total cannot be negative.');
  if (order.source !== sourceForProvider(order.provider)) {
    throw new ValidationError('Aggregator provider and order source do not match.');
  }
}

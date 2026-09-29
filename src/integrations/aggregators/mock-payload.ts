import type { AggregatorProvider } from './types';

export interface MockAggregatorPayload {
  provider: AggregatorProvider;
  orderId: string;
  outletId: string;
  status: string;
  paymentStatus: 'prepaid' | 'pay_on_delivery';
  createdAt: string;
  customer?: { name?: string; phone?: string };
  items: Array<{
    id: string;
    variantId?: string;
    name: string;
    quantity: number;
    unitPriceMinor: number;
    modifiers?: Array<{ id?: string; name: string; quantity?: number; priceMinor?: number }>;
    notes?: string;
  }>;
  totals: {
    subtotalMinor: number;
    taxMinor: number;
    discountMinor: number;
    deliveryChargesMinor: number;
    grandTotalMinor: number;
  };
}

export function isMockAggregatorPayload(value: unknown): value is MockAggregatorPayload {
  if (!value || typeof value !== 'object') return false;
  const payload = value as Partial<MockAggregatorPayload>;
  return (
    (payload.provider === 'swiggy' || payload.provider === 'zomato') &&
    typeof payload.orderId === 'string' &&
    typeof payload.outletId === 'string' &&
    Array.isArray(payload.items) &&
    Boolean(payload.totals && typeof payload.totals.grandTotalMinor === 'number')
  );
}

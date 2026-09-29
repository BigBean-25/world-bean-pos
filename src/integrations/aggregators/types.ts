import type { OrderSource } from '@/constants/enums';

export type AggregatorProvider = 'swiggy' | 'zomato';

export interface NormalizedAggregatorModifier {
  externalId?: string;
  name: string;
  quantity: number;
  priceMinor: number;
}

export interface NormalizedAggregatorItem {
  externalItemId: string;
  externalVariantId?: string | null;
  name: string;
  quantity: number;
  unitPriceMinor: number;
  modifiers: NormalizedAggregatorModifier[];
  notes?: string | null;
}

export interface NormalizedAggregatorOrder {
  provider: AggregatorProvider;
  source: OrderSource;
  externalOrderId: string;
  externalOutletId: string;
  customer: {
    name?: string | null;
    phone?: string | null;
  } | null;
  items: NormalizedAggregatorItem[];
  subtotalMinor: number;
  taxMinor: number;
  discountMinor: number;
  deliveryChargesMinor: number;
  grandTotalMinor: number;
  paymentStatus: 'prepaid' | 'pay_on_delivery' | 'unknown';
  providerStatus: string;
  createdAt: Date;
  rawPayload: unknown;
}

export interface AggregatorAdapter {
  provider: AggregatorProvider;
  isMockMode(): boolean;
  normalizeIncomingOrder(payload: unknown): NormalizedAggregatorOrder;
}

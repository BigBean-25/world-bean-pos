import { ValidationError } from '@/lib/api/errors';

import { assertNormalizedAggregatorOrder, sourceForProvider } from './normalized-order';
import { isMockAggregatorPayload } from './mock-payload';
import type { AggregatorAdapter, AggregatorProvider, NormalizedAggregatorOrder } from './types';

export class MockAggregatorAdapter implements AggregatorAdapter {
  constructor(public readonly provider: AggregatorProvider) {}

  isMockMode(): boolean {
    return true;
  }

  normalizeIncomingOrder(payload: unknown): NormalizedAggregatorOrder {
    if (!isMockAggregatorPayload(payload) || payload.provider !== this.provider) {
      throw new ValidationError(`Invalid ${this.provider} mock payload.`);
    }

    const normalized: NormalizedAggregatorOrder = {
      provider: this.provider,
      source: sourceForProvider(this.provider),
      externalOrderId: payload.orderId,
      externalOutletId: payload.outletId,
      customer: payload.customer ?? null,
      items: payload.items.map((item) => ({
        externalItemId: item.id,
        externalVariantId: item.variantId ?? null,
        name: item.name,
        quantity: item.quantity,
        unitPriceMinor: item.unitPriceMinor,
        modifiers: (item.modifiers ?? []).map((modifier) => ({
          externalId: modifier.id,
          name: modifier.name,
          quantity: modifier.quantity ?? 1,
          priceMinor: modifier.priceMinor ?? 0,
        })),
        notes: item.notes ?? null,
      })),
      subtotalMinor: payload.totals.subtotalMinor,
      taxMinor: payload.totals.taxMinor,
      discountMinor: payload.totals.discountMinor,
      deliveryChargesMinor: payload.totals.deliveryChargesMinor,
      grandTotalMinor: payload.totals.grandTotalMinor,
      paymentStatus: payload.paymentStatus,
      providerStatus: payload.status,
      createdAt: new Date(payload.createdAt),
      rawPayload: payload,
    };

    assertNormalizedAggregatorOrder(normalized);
    return normalized;
  }
}
